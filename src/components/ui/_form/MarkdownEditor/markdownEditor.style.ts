import { css, cva } from 'styled-system/css'

import type { SystemStyleObject } from 'styled-system/types'

const baseColorStyle: SystemStyleObject = {
	borderColor: 'gray.300'
}

// markdownのために高さ設定する
const textareaWrapperStyle: SystemStyleObject = {
	width: '100%',
	minHeight: '240px',
	...baseColorStyle,
	borderX: '1px solid',
	borderBottom: '1px solid',
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
	...baseColorStyle,
	border: '1px solid',
	borderTopRadius: 'sm',
	borderBottom: 'none',
	marginTop: '8px'
})

export const textareaWrapper = css({
	...textareaWrapperStyle,
	padding: '4px'
})

// textareaとmarkdownを切り替えるためのstyle
export const viewSwitcher = cva({
	variants: {
		isPreview: {
			true: { display: 'none' },
			false: { display: 'block' }
		}
	}
})

// textareaとpreviewの切り替えで文字の表示位置にずれが起きないようにするためのpadding
export const markdownWrapper = css({
	padding: '5px'
})

/** recipe */
export const modeChangeButton = cva({
	base: {
		display: 'inline-flex',
		padding: '4px 8px',
		borderTopRadius: 'sm',
		cursor: 'pointer',
		fontWeight: '600',
		fontSize: '14px'
	},
	variants: {
		isActive: {
			true: { backgroundColor: 'white', borderBottom: 'none' },
			false: { color: 'gray.500', backgroundColor: 'gray.100', _hover: { color: 'black' } }
		}
	}
})
