export const pathName = {
	home: '/',
	login: '/login'
} as const

export type PathName = keyof typeof pathName
