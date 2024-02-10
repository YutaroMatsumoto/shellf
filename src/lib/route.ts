export const pathName = {
	home: '/',
	login: '/login',
	my: '/my',
	groupNew: '/my/group/new',
	group: (groupId: string) => `/group/${groupId}`,
	eventNew: (groupId: string) => `/group/${groupId}/event/new`
} as const

export function generatePath(pathKey: PathName, params?: string): string {
	const pathOrFunction = pathName[pathKey]

	if (typeof pathOrFunction === 'function') {
		return pathOrFunction(params ?? '')
	}
	return pathOrFunction
}

export type PathName = keyof typeof pathName
export type PathValues = (typeof pathName)[PathName]
