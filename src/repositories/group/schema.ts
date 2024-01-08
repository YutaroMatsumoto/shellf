import { z } from 'zod'

// TODO: setErrorMapを使ったメッセージの指定が理想
const requiredMessage = 'この項目は必須です'
// const IMAGE_TYPES = ['image/jpeg', 'image/png']
export const groupNewSchema = z.object({
	name: z
		.string()
		.max(50, { message: '50文字以下で入力してください' })
		.min(1, { message: requiredMessage }),
	description: z.string().min(1, { message: requiredMessage })

	/**
	 * NOTE: File object に関して
	 * 現状（2023/12時点）、File object はsveltekit-superformsではサポートされていない。
	 * よって、本来であればzodにてschemaを管理するのが好ましいが、それができない。
	 * 将来的にサポートされることを期待して、以下にfileのバリデーション周りの苦労した跡を残しておく。
	 */

	// sample: z.string().min(1, { message: requiredMessage }),
	// MEMO: 以下のschemaを入れると500エラーになる。2行目以降のコード原因となっていそう。
	// img: z.custom<FileList>().refine((file) => !file ?? file?.length !== 0, { message: '必須です' }),
	// .transform((file) => file[0])
	// .refine((file) => file.size < 1048576, { message: 'ファイルサイズは最大1MBです' })
	// .refine((file) => IMAGE_TYPES.includes(file.type), {
	// 	message: '.jpgもしくは.pngのみ可能です'
	// })

	// img: z
	// 	.instanceof(Blob, { message: requiredMessage })
	// 	.optional()
	// 	.refine((file) => file && file.size < 1000000, { message: 'ファイルサイズは最大1MBです' })
})

/** NOTE: 上記の通り、imgはsuperformsで扱えないため、別schemaとして定義 */
export const groupNewImgSchema = z.object({
	img: z
		.instanceof(File)
		.refine((file) => file && file.size < 1000000, { message: 'ファイルサイズは最大1MBです' })
})

export type GroupNewSchema = typeof groupNewSchema
