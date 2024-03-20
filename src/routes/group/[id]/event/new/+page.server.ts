import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { error, type ServerLoad } from '@sveltejs/kit'

import { superValidate, withFiles } from 'sveltekit-superforms/server'
import { eventNewSchema } from '$repositories/event/schema'
import { zod } from 'sveltekit-superforms/adapters'
import { v4 as uuidv4 } from 'uuid'

export const load: ServerLoad = async () => {
	const form = await superValidate(zod(eventNewSchema))
	return { form }
}

export const actions: Actions = {
	default: async ({ params, request, locals: { getSession, supabase } }) => {
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		// formDataを利用する場合、superValidateの第二引数はrequestではなくformDataをセットする必要がある
		const form = await superValidate(request, zod(eventNewSchema))

		// validation error 発生時
		if (!form.valid) {
			return fail(400, withFiles({ form }))
		}

		const { title, description, startDatetime, endDatetime, groupIsPrivate, img } = form.data

		let imgPublicUrl: string | null = null

		if (img instanceof File && img.size > 0 && session?.user.id) {
			const fileExt = img.name.split('.').pop() // 拡張子
			const randomNumber = uuidv4()
			const path = `${session.user.id}/${randomNumber}.${fileExt}`

			// TODO: RLSを見直す必要があれば見直す（selectのpolicyを見直す必要がありそう）
			const { data, error: uploadError } = await supabase.storage.from('images').upload(path, img)

			if (uploadError) {
				// TODO: エラーハンドリング
				error(400, 'エラーハンドリング機能は開発中です')
			}

			if (data.path)
				imgPublicUrl = await supabase.storage.from('images').getPublicUrl(path).data.publicUrl
		}

		const startDatetimeISOS = new Date(startDatetime).toISOString()

		const endDatetimeISOS = new Date(endDatetime).toISOString()

		const { error: eventNewError } = await supabase.from('event').insert([
			{
				title,
				description,
				start_datetime: startDatetimeISOS,
				end_datetime: endDatetimeISOS,
				is_private: groupIsPrivate, // MEMO: MVPではgroupのisPrivateを登録
				created_by: session.user.id,
				group_id: params.id,
				img_url: imgPublicUrl
			}
		])

		return withFiles({ form })
	}
}

/**
 * エラーハンドリング共通化後に必要であれば利用する。
 * NOTE: 本当はやりたくない型ガード（issueとしてあげても良いかも？）
 * uploadを利用時に返却されるerrorオブジェクトにstatusCodeが含まれているが、
 * typescriptの判定としては含まれていない扱いになっているので、型ガードで上書きする。
 */
// type GuardArgObject = Record<string, unknown>
// function isContainStatusCode(
// 	value: GuardArgObject
// ): value is GuardArgObject & { statusCode: string } {
// 	return 'statusCode' in value
// }
