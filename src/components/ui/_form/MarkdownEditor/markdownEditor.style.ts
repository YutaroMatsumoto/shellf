import { css, cva } from 'styled-system/css'

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

export const markdownEditorWrapper = css({
	display: 'flex',
	flexDirection: 'column'
})

export const modeChangeButtonWrapper = css({
	display: 'flex',
	backgroundColor: 'gray.100',
	...baseBorderStyle,
	borderTopRadius: 'sm',
	borderBottom: 'none',
	marginTop: '8px'
})

/** recipe */
export const textareaWrapper = cva({
	base: {
		...textareaWrapperStyle,
		padding: '4px'
	},
	variants: {
		isPreview: {
			true: { display: 'none' },
			false: { display: 'block' }
		}
	}
})

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

/** recipe */
export const modeChangeButton = cva({
	base: {
		display: 'inline-flex',
		padding: '4px 8px',
		borderTopRadius: 'sm',
		cursor: 'pointer',
		fontWeight: '400'
	},
	variants: {
		isActive: {
			true: { backgroundColor: 'white', borderBottom: 'none' },
			false: { color: 'gray.500', backgroundColor: 'gray.100', _hover: { color: 'black' } }
		}
	}
})
