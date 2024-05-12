import { writable } from 'svelte/store'

export type Mode = 'on' | 'off'

// MEMO: layoutとpageで共通の状態を扱いたいため、storeで管理
const groupEditMode = writable<Mode>('off')
const { subscribe, set } = groupEditMode

export const createGroupEditMode = {
	subscribe,
	turnOn: () => set('on'),
	turnOff: () => set('off')
}
