import { z } from 'zod'

// TODO: setErrorMapを使ったメッセージの指定が理想
const requiredMessage = 'この項目は必須です'

export const groupNewSchema = z.object({
	name: z
		.string()
		.max(50, { message: '50文字以下で入力してください' })
		.min(1, { message: requiredMessage }),
	description: z.string().min(1, { message: requiredMessage })
})

export type GroupNewSchema = typeof groupNewSchema
