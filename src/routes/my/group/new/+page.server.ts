import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { error, type ServerLoad } from '@sveltejs/kit'

import { groupNewSchema } from '$repositories/group/schema'
import { superValidate, withFiles } from 'sveltekit-superforms'
import { v4 as uuidv4 } from 'uuid'
import { zod } from 'sveltekit-superforms/adapters'

export const load: ServerLoad = async () => {
	const form = await superValidate(zod(groupNewSchema))
	return { form }
}

export const actions: Actions = {
	default: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		const form = await superValidate(request, zod(groupNewSchema))

		if (!form.valid) {
			return fail(400, withFiles({ form }))
		}

		let imgPublicUrl: string | null = null

		const { name, description, isPrivate, img } = form.data

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

		const { error: groupError } = await supabase.from('group').insert([
			{
				name,
				description,
				is_private: isPrivate,
				img_url: imgPublicUrl,
				created_by: session.user.id
			}
		])

		if (groupError) {
			// TODO: エラーハンドリング
			error(400, 'エラーハンドリング機能は開発中です')
		}

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
