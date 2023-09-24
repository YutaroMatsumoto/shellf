import { css } from 'styled-system/css'

export const overlay = css({
	position: 'fixed',
	inset: 0,
	backgroundColor: 'black',
	opacity: 0.3
})

export const content = css({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: 'white',
	padding: '16px',
	borderRadius: 'sm'
})
