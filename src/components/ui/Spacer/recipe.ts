import { cva } from 'styled-system/css'

export const spacer = cva({
	variants: {
		space: {
			20: { marginTop: '20px' },
			24: { marginTop: '24px' }
		}
	}
})
