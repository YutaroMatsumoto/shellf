import { css } from 'styled-system/css'
import type { SystemStyleObject } from 'styled-system/types'

const groupImgCommonStyle: SystemStyleObject = {
	height: '72px'
}

export const card = css({
	width: '160px',
	height: '120px',
	borderRadius: 'sm',
	borderWidth: '1px',
	borderColor: 'gray.300',
	cursor: 'pointer'
})

export const cardLink = css({
	h: 'full',
	display: 'flex',
	flexDirection: 'column'
})

export const noImg = css({
	...groupImgCommonStyle,
	bg: 'gray.200'
})

export const img = css({
	objectFit: 'contain',
	...groupImgCommonStyle
})
