import { cva } from 'styled-system/css'

import type { SystemStyleObject } from 'styled-system/types'

const baseBorderStyle: SystemStyleObject = {
	border: '1px solid',
	borderColor: 'gray.300'
}

// markdownのために高さ設定する
const textareaWrapperStyle: SystemStyleObject = {
	width: '100%',
	minHeight: '240px',
	...baseBorderStyle,
	borderBottomRadius: 'sm',
	borderTop: 'none'
}

/** recipe */
export const markdownWrapper = cva({
	base: {
		...textareaWrapperStyle,
		padding: '9px' /** 8px + borderの1px */
	},
	variants: {
		isPreview: {
			true: { display: 'block' },
			false: { display: 'none' }
		}
	}
})
