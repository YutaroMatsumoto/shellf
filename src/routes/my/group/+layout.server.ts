export const prerender = false
import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: LayoutServerLoad = async ({ locals: { getSession } }) => {
	const session = await getSession()
	if (!session) {
		error(401, 'ログインが必要です。')
	}
}
