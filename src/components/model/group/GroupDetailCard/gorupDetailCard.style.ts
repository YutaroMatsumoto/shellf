import { css } from 'styled-system/css'

export const cardWrapper = css({
	display: 'flex',
	gap: '24px',
	width: '100%',
	padding: '24px',
	bg: 'white'
})

export const groupImage = css({
	width: '192px',
	height: '108px',
	objectFit: 'contain',
	border: '1px solid',
	borderRadius: 'sm',
	borderColor: 'gray.300'
})

export const editModeWrapper = css({
	marginLeft: 'auto',
	display: 'flex',
	flexDirection: 'column',
	gap: '8px'
})

export const buttonWrapper = css({
	marginLeft: 'auto',
	display: 'flex'
})
