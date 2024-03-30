export const prerender = false
import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: LayoutServerLoad = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession()
	if (!session) {
		error(401, 'ログインが必要です。')
	}

	const groupsCreatedByMe = await supabase
		.from('group')
		.select('*', { count: 'exact' })
		.eq('created_by', session.user.id)

	return { groupsCreatedByMe }
}
