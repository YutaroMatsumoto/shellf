import { css } from 'styled-system/css'
import type { SystemStyleObject } from 'styled-system/types'

const groupImgCommonStyle: SystemStyleObject = {
	height: '108px'
}

export const card = css({
	position: 'relative',
	width: '160px',
	height: '156px',
	borderRadius: 'sm',
	borderWidth: '1px',
	borderColor: 'gray.300',
	cursor: 'pointer'
})

export const adminMark = css({
	position: 'absolute',
	top: '4px',
	left: '4px',
	padding: '4px',
	borderRadius: 'sm',
	fontSize: 'sm',
	backgroundColor: 'red.700',
	color: 'white',
	fontWeight: 'bold'
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
