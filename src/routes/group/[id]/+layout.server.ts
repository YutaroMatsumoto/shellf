// MEMO: group詳細画面の編集機能のサーバー処理を行うためのファイル

import { error } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import type { LayoutServerLoad } from './$types'
import { groupNameShema } from '$repositories/group/schema'

export const load: LayoutServerLoad = async ({
	params: { id },
	parent,
	locals: { getSession }
}) => {
	const session = await getSession()

	if (!session) error(401, 'ログインが必要です。')

	const {
		group: { data }
	} = await parent()

	if (!id || !data?.[0]) error(404)

	const { name } = data?.[0] ?? {}
	console.log({ name })

	const groupNameForm = await superValidate({ name }, zod(groupNameShema))

	return { groupNameForm }
}
