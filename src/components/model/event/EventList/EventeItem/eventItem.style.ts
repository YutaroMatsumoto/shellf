import { css } from 'styled-system/css'

import type { SystemStyleObject } from 'styled-system/types'

const groupItemImageSize: SystemStyleObject = {
	width: '160px',
	height: '90px',
	border: '1px solid',
	borderRadius: 'sm',
	borderColor: 'gray.300'
}

export const article = css({
	display: 'flex',
	gap: '16px',
	padding: '16px',
	borderBottomWidth: '1px',
	borderColor: 'gray.300'
})

export const eventImage = css({
	...groupItemImageSize,
	objectFit: 'contain'
})

export const noImage = css({
	...groupItemImageSize,
	bg: 'gray.200',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '14px'
	// color: 'white'
})

export const item = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px'
})

export const timeAndLabel = css({
	display: 'flex',
	gap: '8px'
})
