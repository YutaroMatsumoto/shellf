// group/[id]のlayout uiを継承したくない場合もあるため、group/直下にdata取得のserverファイルを配置

import type { LayoutServerLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: LayoutServerLoad = async ({
	params: { id },
	locals: { supabase, getSession }
}) => {
	const session = await getSession()

	if (!session) error(401, 'ログインが必要です。')

	if (!id) error(404)

	const group = await supabase.rpc('get_group_with_create_user', { group_id: id })
	return { group }
}
