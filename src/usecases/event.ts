import { createSnackbar } from '$globalStates/snackbar'
import { generatePath } from '$lib/route'
import { goto } from '$app/navigation'

export const deleteEvent = async (
	groupId: string,
	eventId: string,
	startFetch: () => void,
	endFetch: () => void
) => {
	if (!window.confirm('イベントを削除しますか？')) {
		return
	}
	startFetch()
	await fetch(`/api/event/delete/${eventId}`, { method: 'DELETE' })
		.then((response) => {
			response.ok && createSnackbar.addSnackbar('success', 'イベントの削除に成功しました')
			goto(generatePath('groupEventList', [groupId]))
		})
		.catch(() => createSnackbar.addSnackbar('failure', 'イベントの削除に失敗しました'))
		.finally(endFetch)
}
