import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ locals: { supabase, getSession } }) => {
	// const sam = await parent()
	// console.log({ sam })

	const session = await getSession()
	if (!session) {
		throw error(401, 'ログインが必要です。')
	}

	// const groups = await supabase.from('group').select('*').eq('created_by', session.user.id)
	// const groups = await supabase.from('group').select(`*`).eq()
	// .in('id', (await supabase.from('group_member').select('group_id').eq('user_id', session.user.id)?.data))

	const groups = supabase.rpc('get_belong_group', { user_id: session.user.id })
	console.log('useridを表示', session.user.id)
	console.log('groupsを表示', groups)

	return { groups }
}
