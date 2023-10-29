import { z } from 'zod'

export const groupNewSchema = z.object({
	name: z.string().max(10, { message: '10文字以下で入力してください' }),
	description: z.string()
})

export type GroupNewSchema = typeof groupNewSchema
