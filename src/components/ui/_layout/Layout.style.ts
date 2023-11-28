import { css } from 'styled-system/css'

export const wrapperStyles = css({
	height: '100vh',
	overflow: 'auto'
})

export const mainStyles = css({
	gridRow: 2,
	bg: 'gray.50',
	overflow: 'auto',
	marginTop: '58px',
	minH: 'calc(100vh - 178px)'
})

export const snackbarContainer = css({
	position: 'fixed',
	bottom: '20px',
	right: '20px',
	display: 'flex',
	flexDirection: 'column'
})
