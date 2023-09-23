import type { User } from 'src/models/user'
import { getContext, setContext } from 'svelte'
import { writable, type Writable } from 'svelte/store'

type ContextUser = Writable<User>

export function setUser(userData: User) {
	if (!userData) return
	const user = writable<User>(userData)
	setContext('user', user)
}

export function getUser() {
	return getContext<ContextUser>('user')
}
