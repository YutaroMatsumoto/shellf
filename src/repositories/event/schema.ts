import { z } from 'zod'

// TODO: setErrorMapを使ったメッセージの指定が理想
const requiredMessage = 'この項目は必須です'

const baseEventNewSchema = z.object({
	title: z
		.string()
		.max(50, { message: '50文字以下で入力してください' })
		.min(1, { message: requiredMessage }),
	description: z.string().min(1, { message: requiredMessage }),
	startDatetime: z.date({ required_error: requiredMessage }),
	endDatetime: z.date({ required_error: requiredMessage }),
	groupIsPrivate: z.boolean(),
	img: z
		.custom<File>((f) => f instanceof File, 'Please upload a file.')
		.refine((f) => f.size < 1_000_000, 'ファイルサイズは最大1MBです')
		.nullable()
	// isPublic: z.boolean()
})
export const eventNewSchema = baseEventNewSchema.refine(
	({ startDatetime, endDatetime }) => new Date(startDatetime) <= new Date(endDatetime),
	{
		message: '終了日時は開始日時よりも前の日付を入力してください',
		path: ['endDatetime']
	}
)

export type EventNewSchema = z.infer<typeof eventNewSchema>

export const eventTitleShema = baseEventNewSchema.pick({ title: true })
export type EventTitleShema = z.infer<typeof eventTitleShema>

export const eventDescriptionSchema = baseEventNewSchema.pick({ description: true })
export type EventDescriptionSchema = z.infer<typeof eventDescriptionSchema>
