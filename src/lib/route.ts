export const pathName = {
	home: '/',
	login: '/login',
	my: '/my',
	groupNew: '/group/new'
} as const

export type PathName = keyof typeof pathName
export type PathValues = (typeof pathName)[PathName]
