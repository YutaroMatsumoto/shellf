type Params = string[]
export const pathName = {
	home: '/',
	login: '/login',
	my: '/my',
	groupNew: '/my/group/new',
	group: ([groupId]: Params) => `/group/${groupId}`,
	eventNew: ([groupId]: Params) => `/group/${groupId}/event/new`,
	event: ([groupId, eventId]: Params) => `/group/${groupId}/event/${eventId}`
} as const

export function generatePath(pathKey: PathName, params?: string[]): string {
	const pathOrFunction = pathName[pathKey]

	if (typeof pathOrFunction === 'function') {
		return pathOrFunction(params ?? [])
	}
	return pathOrFunction
}

export type PathName = keyof typeof pathName
export type PathValues = (typeof pathName)[PathName]
