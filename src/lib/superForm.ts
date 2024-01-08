/**
 * 方の共通化を試みたがうまくいかなかったためコメントアウト
 */
// import type { AnyZodObject, z } from 'zod'
// import type { ZodValidation, FormPathLeaves } from 'sveltekit-superforms'
// import type { SuperForm } from 'sveltekit-superforms/client'

// // 以下の型を利用すると型エラーになる
// export type FormType<T extends AnyZodObject> = SuperForm<ZodValidation<T>, unknown>
// export type FieldType<T extends AnyZodObject> = FormPathLeaves<z.infer<T>>

// import type { ZodValidation } from 'sveltekit-superforms'
// import { superForm as realSuperForm } from 'sveltekit-superforms/client'
// import type { AnyZodObject } from 'zod'

// export type Message = {
// 	status: 'success' | 'error' | 'warning'
// 	text: string
// }

/**
 * superFormの共通オプション
 * 参考：https://superforms.rocks/faq#i-want-to-reuse-common-options-how-to-do-that-easily
 */
// export function superForm<T extends ZodValidation<AnyZodObject>>(
// 	...params: Parameters<typeof realSuperForm<T, Message>>
// ) {
// 	return realSuperForm<T, Message>(params[0], {
// 		// Your defaults here
// 		errorSelector: '.has-error',
// 		delayMs: 300,
// 		...params[1]
// 	})
// }
