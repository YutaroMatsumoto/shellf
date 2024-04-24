/**
 * buttonのRecipe
 */
import { cva } from 'styled-system/css'

export const secondaryButton = cva({
	base: {
		display: 'inline-flex',
		border: '1px solid',
		borderRadius: 'sm',
		color: 'black',
		fontWeight: 'bold',
		transition: 'background',
		bg: 'white',
		_loading: {
			bg: 'gray.300',
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
			false: { cursor: 'pointer', _hover: { bg: 'gray.50' } }
		}
	},
	defaultVariants: {
		size: 'lg',
		disabled: false
	}
})
