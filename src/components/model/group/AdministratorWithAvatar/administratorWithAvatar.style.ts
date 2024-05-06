import { css } from 'styled-system/css'

export const sectionWrapper = css({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: 'auto',
	border: '1px solid',
	borderRadius: 'sm',
	borderColor: 'gray.300',
	width: '240px'
})

export const title = css({
	padding: '8px',
	width: '100%',
	bg: 'gray.200'
})

export const administratorSection = css({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	padding: '8px'
})
