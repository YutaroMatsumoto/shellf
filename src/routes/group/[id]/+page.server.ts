import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { error, type ServerLoad } from '@sveltejs/kit'

import { groupDescriptionSchema, groupNameShema } from '$repositories/group/schema'
import { superValidate, withFiles } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load: ServerLoad = async () => {
	const groupDescriptionForm = await superValidate(zod(groupDescriptionSchema))
	return { groupDescriptionForm }
}

export const actions: Actions = {
	updateGroupName: async ({ request, locals: { getSession, supabase }, params: { id } }) => {
		console.log('updateGroupName関数')
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		const form = await superValidate(request, zod(groupNameShema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { name } = form.data

		const { error: groupError } = await supabase
			.from('group')
			.update({
				name
			})
			.eq('id', id)

		console.log({ name, groupError })

		if (groupError) {
			// TODO: エラーハンドリング
			error(400, 'エラーハンドリング機能は開発中です')
		}

		return withFiles({ form })
	}
}
