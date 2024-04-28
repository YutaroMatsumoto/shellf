type Params = string[]
export const pathName = {
	home: '/',
	login: '/login',
	my: '/my',
	myEventList: '/my/event',
	groupNew: '/my/group/new',
	groupDetail: ([groupId]: Params) => `/group/${groupId}`,
	groupEdit: ([groupId]: Params) => `/group/${groupId}/edit`,
	eventNew: ([groupId]: Params) => `/group/${groupId}/event/new`,
	groupEventList: ([groupId]: Params) => `/group/${groupId}/event`,
	eventDetail: ([groupId, eventId]: Params) => `/group/${groupId}/event/${eventId}`
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
