import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ url, params, locals: { supabase, getSession } }) => {
	const currentPage = url.searchParams.get('page') ?? '1'
	const offset = (Number(currentPage) - 1) * 10

	const groupId = params.id

	const session = await getSession()
	if (!session) {
		error(401, 'ログインが必要です。')
	}

	const events = await supabase
		.from('event')
		.select('*', { count: 'exact' })
		.eq('group_id', groupId)
		.order('start_datetime', { ascending: false })
		.range(offset, offset + 9)

	return { events, currentPage }
}
