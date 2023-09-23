import type { Session } from '@supabase/supabase-js'
import { getContext, setContext } from 'svelte'
import { readable, type Readable } from 'svelte/store'

type SessionType = Session | null
type ContextSession = Readable<SessionType>

export function setSession(sessionData: SessionType) {
	if (!sessionData) return
	const session = readable<SessionType>(sessionData)
	setContext('session', session)
}

export function getSession() {
	return getContext<ContextSession>('session')
}
