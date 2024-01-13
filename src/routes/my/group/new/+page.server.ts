import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { error, type ServerLoad } from '@sveltejs/kit'

import { groupNewImgSchema, groupNewSchema } from '$repositories/group/schema'
import { superValidate } from 'sveltekit-superforms/server'
import { v4 as uuidv4 } from 'uuid'

export const load: ServerLoad = async () => {
	const form = await superValidate(groupNewSchema)
	return { form }
}

export const actions: Actions = {
	default: async ({ request, locals: { getSession, supabase } }) => {
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		// formDataを利用する場合、superValidateの第二引数はrequestではなくformDataをセットする必要がある
		let imgError: string | undefined = undefined
		const formData = await request.formData()
		const form = await superValidate(formData, groupNewSchema)

		const img = formData.get('img')
		const imgValidationResult = groupNewImgSchema.safeParse({ img })
		if (!imgValidationResult.success) {
			imgError = imgValidationResult.error.formErrors.fieldErrors.img?.[0]
		}

		// validation error 発生時
		if (!form.valid || !imgValidationResult.success) {
			return fail(400, { form, imgError })
		}

		let imgPublicUrl: string | null = null

		// ファイルアップロードしていない時もsize 0のFileオブジェクトと判定されるため、sizeのチェックも行う
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

		const { name, description } = form.data

		const { error: groupError } = await supabase
			.from('group')
			.insert([{ name, description, img_url: imgPublicUrl, created_by: session.user.id }])

		if (groupError) {
			// TODO: エラーハンドリング
			error(400, 'エラーハンドリング機能は開発中です')
		}

		return { form }
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
