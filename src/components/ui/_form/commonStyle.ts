import type { SystemStyleObject } from 'styled-system/types'
import { cva } from 'styled-system/css'

export const commonTextStyle: SystemStyleObject = {
	display: 'inline-flex',
	width: '100%',
	padding: '4px',
	borderWidth: '1px',
	borderColor: 'gray.300',
	borderRadius: 'sm',
	_focusWithin: {
		borderColor: 'green.500'
	}
}

export const fieldStyle = cva({
	base: commonTextStyle,
	variants: {
		isError: {
			true: { borderColor: 'red.500' }
		}
	},
	defaultVariants: {
		isError: false
	}
})
