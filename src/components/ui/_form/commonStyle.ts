import type { SystemStyleObject } from 'styled-system/types'
import { cva } from 'styled-system/css'
import { css } from 'styled-system/css'

export const commonTextStyle: SystemStyleObject = {
	display: 'inline-flex',
	padding: '4px',
	borderWidth: '1px',
	borderColor: 'gray.300',
	borderRadius: 'sm',
	_focusWithin: {
		borderColor: 'green.500'
	}
}

export const field = css(commonTextStyle)

/** recipe */
export const fieldWrapper = cva({
	variants: {
		space: {
			0: { marginTop: '0px' },
			20: { marginTop: '20px' }
		}
	},
	defaultVariants: {
		space: 0
	}
})
