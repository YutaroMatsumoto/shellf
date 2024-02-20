import { css } from 'styled-system/css'

export const item = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	padding: '16px',
	borderBottomWidth: '1px',
	borderColor: 'gray.300',
	_hover: {
		backgroundColor: 'gray.100'
	}
})

export const timeAndLabel = css({
	display: 'flex',
	gap: '8px'
})
