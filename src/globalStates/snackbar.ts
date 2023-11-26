import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'

export type Status = 'success' | 'failure'
export type Snackbar = {
	id: string
	/** 成功か失敗か */
	status: Status
	/** メッセージ */
	message: string
	/** 表示中かどうか */
	show: boolean
}

const displayDuration = 8000
const snackbar = writable<Snackbar[]>([])

export const createSnackbar = {
	subscribe: snackbar.subscribe,
	addSnackbar: (status: Status, message: string) => {
		const id = uuidv4()
		snackbar.update((snackbar) => [...snackbar, { id, status, message, show: true }])
		setTimeout(
			() =>
				snackbar.update((snackbar) => snackbar.filter(({ id: snackbarId }) => snackbarId !== id)),
			displayDuration
		)
	}
}
