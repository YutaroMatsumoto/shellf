export const pathName = {
	home: '/',
	login: '/login',
	my: '/my',
	groupNew: '/my/group/new',
	group: '/group/:[id]'
} as const

export type PathName = keyof typeof pathName
export type PathValues = (typeof pathName)[PathName]
