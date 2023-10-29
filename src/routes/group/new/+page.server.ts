import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { error, redirect, type ServerLoad } from '@sveltejs/kit'

import { groupNewSchema } from '$repositories/group/schema'
import { superValidate } from 'sveltekit-superforms/server'

export const load: ServerLoad = async () => {
	const form = await superValidate(groupNewSchema)
	return { form }
}

/**
 * MEMO: supabase側のRLSを外したら保存できた。
 * - created_byが入ってなかったので、それを登録できるようにする。
 * - RLSの設定を追加して、RLSが有効になっていてもdataを登録できるようにする。
 */
export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await superValidate(request, groupNewSchema)
		console.log('POST', form)

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form })
		}

		const { name, description } = form.data

		const session = await locals.getSession()
		if (!session) {
			throw error(401, 'ログインが必要です。')
		}

		const { error: supabaseError } = await locals.supabase
			.from('group')
			.insert([{ name, description, created_by: session.user.id }])

		console.log({ supabaseError })

		return { form }
	}
}
