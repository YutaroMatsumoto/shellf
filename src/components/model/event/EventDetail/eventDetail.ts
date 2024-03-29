import { css } from 'styled-system/css'
import type { SystemStyleObject } from 'styled-system/types'

export const imgAreaCommonStyle: SystemStyleObject = {
	minWidth: '384px',
	minHeight: '216px',
	maxHeight: '540px',
	maxWidth: '960px',
	objectFit: 'contain'
}

export const sectionWrapper = css({
	// 最小400pxの想定 768px - 48px（padding） - 320px
	width: 'calc(100% - 320px)'
})

export const section = css({
	width: '100%',
	minWidth: 400,
	padding: '8px',
	backgroundColor: 'white',
	border: '1px solid',
	borderRadius: 'sm',
	borderColor: 'gray.300'
})

export const imgWrapper = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
})

// widthとheightはのminの値は16:9になるようにしている
export const eventImg = css({
	...imgAreaCommonStyle
})

export const noImg = css({
	...imgAreaCommonStyle,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
})
