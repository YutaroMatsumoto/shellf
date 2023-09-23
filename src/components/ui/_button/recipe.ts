/**
 * buttonのRecipe
 */
import { cva } from 'styled-system/css'

export const button = cva({
	base: {
		display: 'flex',
		border: 'none',
		borderRadius: 'sm',
		color: 'white',
		fontWeight: 'bold',
		transition: 'background'
	},
	variants: {
		type: {
			primary: { bg: 'green.500', _hover: { bg: 'green.600' } },
			danger: { color: 'red' }
		},
		size: {
			sm: { padding: '4px 8px', fontSize: '12px' },
			lg: { padding: '8px 16px', fontSize: '16px' }
		}
	},
	defaultVariants: {
		type: 'primary',
		size: 'lg'
	}
})
