import type { RequestHandler } from './$types'

import { json } from '@sveltejs/kit'

// TODO: returnする値は見直す
export const DELETE: RequestHandler = async ({ locals: { supabase }, params: { id } }) => {
	const { data, error } = await supabase.from('group').delete().eq('id', id)
	return json(error ?? data)
}
