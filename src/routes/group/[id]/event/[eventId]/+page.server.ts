import type { Actions, PageServerLoad } from './$types'
import { fail, error } from '@sveltejs/kit'

import { superValidate, withFiles } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { eventDescriptionSchema, eventTitleShema } from '$repositories/event/schema'

export const load: PageServerLoad = async ({ params, locals: { supabase, getSession } }) => {
	const eventId = params.eventId

	const session = await getSession()
	if (!session) {
		error(401, 'ログインが必要です。')
	}

	const { data } = await supabase.from('event').select('*').eq('id', eventId)
	if (!data?.[0]) error(404)

	const { title, description } = data?.[0] ?? {}

	const eventTitleForm = await superValidate({ title }, zod(eventTitleShema))
	const eventDescriptionForm = await superValidate({ description }, zod(eventDescriptionSchema))

	return { event: data, eventTitleForm, eventDescriptionForm }
}

export const actions: Actions = {
	updateEventName: async ({ request, locals: { getSession, supabase }, params: { eventId } }) => {
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		const form = await superValidate(request, zod(eventTitleShema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { title } = form.data

		const { error: eventError } = await supabase
			.from('event')
			.update({
				title
			})
			.eq('id', eventId)

		if (eventError) {
			// TODO: エラーハンドリング
			error(400, 'エラーハンドリング機能は開発中です')
		}

		return withFiles({ form })
	},
	updateEventDescription: async ({
		request,
		locals: { getSession, supabase },
		params: { eventId }
	}) => {
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		const form = await superValidate(request, zod(eventDescriptionSchema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { description } = form.data

		const { error: eventError } = await supabase
			.from('event')
			.update({
				description
			})
			.eq('id', eventId)

		if (eventError) {
			// TODO: エラーハンドリング
			error(400, 'エラーハンドリング機能は開発中です')
		}

		return withFiles({ form })
	}
}
