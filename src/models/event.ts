import dayjs from '$lib/dayjs'
import type { Database } from 'src/database'

export type Event = Database['public']['Tables']['event']['Row']

export const EventLabel = {
	future: '開催前',
	today: '本日開催',
	past: '終了'
} as const

export type EventLabelKey = keyof typeof EventLabel

/**
 * イベントが開催前なのか、終了しているのか、本日開催なのかのstatusを返す
 *
 * @param startDatetime イベントの開始日時
 * @param endDatetime イベントの終了日時
 * @returns EventLabelKey
 */
export function getEventStatus(startDatetime: string, endDatetime: string): EventLabelKey {
	if (
		dayjs(startDatetime).isToday() ||
		dayjs(endDatetime).isToday() ||
		/** ↓開始日と終了日の間の日付の場合 */
		(dayjs(startDatetime).isBefore() && dayjs(endDatetime).isAfter())
	) {
		return 'today'
	}

	// 開催日が未来
	if (dayjs(startDatetime).isAfter()) {
		return 'future'
	}

	return 'past'
}
