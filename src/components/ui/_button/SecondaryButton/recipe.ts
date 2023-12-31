/**
 * buttonのRecipe
 */
import { cva } from 'styled-system/css'

export const secondaryButton = cva({
	base: {
		display: 'inline-flex',
		border: '1px solid',
		borderRadius: 'sm',
		color: 'green.500',
		fontWeight: 'bold',
		transition: 'background',
		cursor: 'pointer',
		bg: 'white',
		_hover: { bg: 'gray.50' },
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
		}
	},
	defaultVariants: {
		size: 'lg'
	}
})
