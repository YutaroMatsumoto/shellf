import { css } from 'styled-system/css'

export const wrapperStyles = css({
	display: 'grid',
	gridTemplateRows: '58px 1fr auto',
	height: '100vh'
})

export const mainStyles = css({
	gridRow: 2,
	bg: 'gray.50',
	overflow: 'auto'
})

export const snackbarContainer = css({
	position: 'fixed',
	bottom: '20px',
	right: '20px',
	display: 'flex',
	flexDirection: 'column'
})
