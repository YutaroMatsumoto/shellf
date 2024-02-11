/**
 * 受け取った日付と時間から、dateオブジェクトを作成して返す
 * @param date 2024-02-09T00:00:00.000Z の形式
 * @param time hh:mm の形式
 * @returns date
 */
export function formatDate(date: Date, time: string) {
	const formattedDate = date.toISOString().split('T')[0]
	return `${formattedDate}T${time}`
}
