import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { error, type ServerLoad } from '@sveltejs/kit'

import { superValidate } from 'sveltekit-superforms/server'
import { eventNewSchema } from '$repositories/event/schema'
import { formatDate } from '$lib/date'
import { zod } from 'sveltekit-superforms/adapters'

export const load: ServerLoad = async () => {
	const form = await superValidate(zod(eventNewSchema))
	return { form }
}

export const actions: Actions = {
	default: async ({ params, request, locals: { getSession, supabase } }) => {
		const session = await getSession()

		if (!session) {
			error(401, 'ログインが必要です。')
		}

		// formDataを利用する場合、superValidateの第二引数はrequestではなくformDataをセットする必要がある
		const form = await superValidate(request, zod(eventNewSchema))

		// validation error 発生時
		if (!form.valid) {
			return fail(400, { form })
		}

		const {
			title,
			description,
			hasTime,
			hasEndDate,
			startDate,
			startTime,
			endDate,
			endTime,
			groupIsPrivate
		} = form.data

		const startDatetime = hasTime && !!startTime ? formatDate(startDate, startTime) : startDate

		// 終了日だけが入力された場合 -> 時間話でも問題ない
		// 終了日の時間だけが入力された場合 -> 日付はstartDateを使う

		// endDateは必須ではないので、入力されてなければstartDateを利用する
		const endDateOrStartDate = endDate ?? startDate
		const endDatetime =
			hasTime && hasEndDate && !!endTime
				? formatDate(endDateOrStartDate, endTime)
				: endDateOrStartDate

		const startDatetimeISOS = new Date(startDatetime).toISOString()
		const endDatetimeISOS = hasEndDate ? new Date(endDatetime).toISOString() : null
		const { error: eventNewError } = await supabase.from('event').insert([
			{
				title,
				description,
				start_datetime: startDatetimeISOS,
				end_datetime: endDatetimeISOS,
				has_time: hasTime,
				is_private: groupIsPrivate, // MEMO: MVPではgroupのisPrivateを登録
				created_by: session.user.id,
				group_id: params.id
			}
		])

		return { form }
	}
}

/**
 * エラーハンドリング共通化後に必要であれば利用する。
 * NOTE: 本当はやりたくない型ガード（issueとしてあげても良いかも？）
 * uploadを利用時に返却されるerrorオブジェクトにstatusCodeが含まれているが、
 * typescriptの判定としては含まれていない扱いになっているので、型ガードで上書きする。
 */
// type GuardArgObject = Record<string, unknown>
// function isContainStatusCode(
// 	value: GuardArgObject
// ): value is GuardArgObject & { statusCode: string } {
// 	return 'statusCode' in value
// }
