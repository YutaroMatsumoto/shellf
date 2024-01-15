import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async ({
	params: { id },
	locals: { supabase, getSession }
}) => {
	const session = await getSession()
	if (!session) {
		error(401, 'ログインが必要です。')
	}

	const group = await supabase.from('group').select('*').eq('id', id)
	return { group }
}
