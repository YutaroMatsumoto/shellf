import { cva } from 'styled-system/css'

/** recipe */
export const markdownWrapper = cva({
	base: {
		width: '100%',
		minHeight: '240px',
		borderX: '1px solid',
		borderBottom: '1px solid',
		borderColor: 'gray.300',
		borderBottomRadius: 'sm',
		padding: '9px' /** 8px + borderの1px */
	},
	variants: {
		isPreview: {
			true: { display: 'block' },
			false: { display: 'none' }
		}
	}
})
