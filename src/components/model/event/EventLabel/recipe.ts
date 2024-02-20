import { cva } from 'styled-system/css'
export const eventLabel = cva({
	base: {
		borderRadius: 'sm',
		padding: '4px',
		color: 'white',
		fontWeight: 'bold'
	},
	variants: {
		status: {
			future: { backgroundColor: 'green.400' },
			today: { backgroundColor: 'orange.400' }
		}
	}
})

// backgroundColor: status === 'future' ? 'green.400' : 'orange.400',
