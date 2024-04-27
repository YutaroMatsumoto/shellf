import { writable } from 'svelte/store'

export type ModalStatus = 'hidden' | 'login' | 'deleteGroup' | 'deleteEvent'

type Modal = {
	status: ModalStatus
	meta?: string
}

const modal = writable<Modal>({ status: 'hidden' })

export const createModal = {
	subscribe: modal.subscribe,
	// set: (arg: Modal) => {
	// 	modal.set(arg)
	// },
	close: () => {
		modal.set({ status: 'hidden' })
	},
	login: () => {
		modal.set({ status: 'login' })
	},
	deleteGroup: () => {
		modal.set({ status: 'deleteGroup' })
	},
	deleteEvent: () => {
		modal.set({ status: 'deleteEvent' })
	}
}
