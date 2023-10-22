/**
 * buttonのRecipe
 */
import { cva } from 'styled-system/css'

export const button = cva({
	base: {
		display: 'inline-flex',
		border: 'none',
		borderRadius: 'sm',
		color: 'white',
		fontWeight: 'bold',
		transition: 'background',
		cursor: 'pointer'
	},
	variants: {
		variant: {
			primary: { bg: 'green.500', _hover: { bg: 'green.600' } },
			secondary: {
				bg: 'white',
				border: '1px solid',
				color: 'green.500',
				_hover: { bg: 'gray.50' }
			},
			danger: { color: 'red' }
		},
		size: {
			sm: { padding: '4px 8px', fontSize: '12px', lineHeight: '20px' },
			lg: { padding: '8px 16px', fontSize: '16px', lineHeight: '24px' }
		}
	},
	defaultVariants: {
		variant: 'primary',
		size: 'lg'
	}
})
