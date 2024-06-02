import { fail, error } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

import { groupDescriptionSchema, groupNameShema } from '$repositories/group/schema'
import { superValidate, withFiles } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'

export const load: PageServerLoad = async ({ params: { id }, parent }) => {
	const {
		group: { data }
	} = await parent()

	if (!id || !data?.[0]) error(404)

	const { description } = data?.[0] ?? {}

	const groupDescriptionForm = await superValidate({ description }, zod(groupDescriptionSchema))
	return { groupDescriptionForm }
}

export const actions: Actions = {
	updateGroupName: async ({ request, locals: { getSession, supabase }, params: { id } }) => {
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

		if (groupError) {
			// TODO: エラーハンドリング
			error(400, 'エラーハンドリング機能は開発中です')
		}

		return withFiles({ form })
	},
	updateGroupDescription: async ({ request, locals: { getSession, supabase }, params: { id } }) => {
		console.log('updateGroupName関数')
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		const form = await superValidate(request, zod(groupDescriptionSchema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { description } = form.data

		const { error: groupError } = await supabase
			.from('group')
			.update({
				description
			})
			.eq('id', id)

		if (groupError) {
			// TODO: エラーハンドリング
			error(400, 'エラーハンドリング機能は開発中です')
		}

		return withFiles({ form })
	}
}
