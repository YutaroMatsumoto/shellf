import { z } from 'zod'

// TODO: setErrorMapを使ったメッセージの指定が理想
const requiredMessage = 'この項目は必須です'
// const IMAGE_TYPES = ['image/jpeg', 'image/png']
export const groupNewSchema = z.object({
	name: z
		.string()
		.max(50, { message: '50文字以下で入力してください' })
		.min(1, { message: requiredMessage }),
	description: z.string().min(1, { message: requiredMessage }),
	img: z
		.custom<File>((f) => f instanceof File, 'Please upload a file.')
		.refine((f) => f.size < 1_000_000, 'ファイルサイズは最大1MBです')
		.nullable(),
	isPrivate: z.boolean().default(true)
})

export type GroupNewSchema = typeof groupNewSchema
