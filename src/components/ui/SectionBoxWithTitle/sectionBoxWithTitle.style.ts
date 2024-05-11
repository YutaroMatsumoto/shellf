import { css } from 'styled-system/css'

export const sectionWrapper = css({
	width: '100%',
	minHeight: '160px',
	display: 'flex',
	flexShrink: 0,
	flexDirection: 'column',
	border: '1px solid',
	borderRadius: 'sm',
	borderColor: 'gray.300'
})

export const h2 = css({
	padding: '8px',
	width: '100%',
	bg: 'gray.200'
})

export const groupImage = css({
	width: '100px',
	height: '100px',
	objectFit: 'contain',
	border: '1px solid',
	borderRadius: 'sm',
	borderColor: 'gray.300'
})

export const contentSectionWrapper = css({
	width: '100%',
	height: '100%',
	padding: '8px',
	backgroundColor: 'white'
})
