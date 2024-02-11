import type { SystemStyleObject } from 'styled-system/types'
import { css, cva } from 'styled-system/css'

export const fieldWrapper = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px'
})

export const toggleWrapper = css({
	position: 'relative',
	width: '48px'
})

export const input = css({
	position: 'absolute',
	width: '100%',
	height: '100%',
	opacity: 0
})

export const circleDeafultStyle: SystemStyleObject = {
	width: '20px',
	height: '20px',
	backgroundColor: 'white',
	borderRadius: '50%',
	transition: 'ease-in-out',
	transitionDuration: '0.2s'
}

export const circle = cva({
	base: circleDeafultStyle,
	variants: {
		checked: {
			false: { transform: 'translateX(0px)' },
			true: { transform: 'translateX(24px)' }
		}
	},
	defaultVariants: {
		checked: false
	}
})

export const toggleAreaDefaultStyle: SystemStyleObject = {
	display: 'flex',
	height: '24px',
	width: '100%',
	borderRadius: '44px',
	padding: '2px'
}

export const toggleArea = cva({
	base: toggleAreaDefaultStyle,
	variants: {
		checked: {
			false: { backgroundColor: 'gray.300' },
			true: { backgroundColor: 'green.300' }
		}
	},
	defaultVariants: {
		checked: false
	}
})
