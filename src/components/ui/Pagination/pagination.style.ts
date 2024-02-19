import { css } from 'styled-system/css'

export const paginationStyle = css({
	padding: '4px',
	borderRadius: 'sm',
	_hover: {
		backgroundColor: 'gray.100'
	}
})

export const currentPageStype = css({
	padding: '4px',
	backgroundColor: 'green.500',
	color: 'white',
	borderRadius: 'sm'
})

export const paginationWrapper = css({
	display: 'flex',
	justifyContent: 'center',
	gap: '8px',
	padding: '16px'
})
