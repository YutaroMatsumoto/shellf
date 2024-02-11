import { z } from 'zod'

// TODO: setErrorMapを使ったメッセージの指定が理想
const requiredMessage = 'この項目は必須です'
export const eventNewSchema = z.object({
	title: z
		.string()
		.max(50, { message: '50文字以下で入力してください' })
		.min(1, { message: requiredMessage }),
	description: z.string().min(1, { message: requiredMessage }),
	// participantCount: z.number().int().positive().min(0).nullable(),
	isPublic: z.boolean(),
	hasTime: z.boolean(),
	startDatetime: z.date(), // 要確認
	endDatetime: z.date().nullable() // 要確認
})

export type EventNewSchema = typeof eventNewSchema
