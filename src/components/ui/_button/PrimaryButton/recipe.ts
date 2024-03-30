/**
 * buttonのRecipe
 */
import { cva } from 'styled-system/css'

export const primaryButton = cva({
	base: {
		display: 'inline-flex',
		border: 'none',
		borderRadius: 'sm',
		color: 'white',
		fontWeight: 'bold',
		transition: 'background',
		bg: 'green.500',
		_loading: {
			bg: 'green.300',
			cursor: 'none',
			pointerEvents: 'none'
		}
	},
	variants: {
		size: {
			sm: { padding: '4px 8px', fontSize: '12px', lineHeight: '20px', height: '28px' },
			lg: { padding: '8px 16px', fontSize: '16px', lineHeight: '24px', height: '40px' }
		},
		disabled: {
			true: { opacity: 0.5, cursor: 'not-allowed' },
			false: { cursor: 'pointer', _hover: { bg: 'green.600' } }
		}
	},
	defaultVariants: {
		size: 'lg',
		disabled: false
	}
})
