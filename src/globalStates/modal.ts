import { writable } from 'svelte/store'

export type Modal = 'hidden' | 'login' | 'deleteGroup'

const modal = writable<Modal>('hidden')

export const createModal = {
	subscribe: modal.subscribe,
	// set: (arg: Modal) => {
	// 	modal.set(arg)
	// },
	close: () => {
		modal.set('hidden')
	},
	login: () => {
		modal.set('login')
	},
	deleteGroup: () => {
		modal.set('deleteGroup')
	}
}
