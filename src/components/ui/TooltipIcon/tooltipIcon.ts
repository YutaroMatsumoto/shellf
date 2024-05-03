// MEMO: styleのみのファイルではないので、.style.tsではなく.tsファイル
import { css, cva } from 'styled-system/css'

export type TooltipPosition = 'lowerRight' | 'lowerLeft'

export const wrapper = css({
	position: 'relative',
	zIndex: 10
})

// recipe
export const tooltip = cva({
	base: {
		position: 'absolute',
		backgroundColor: 'white',
		shadow: 'lg',
		padding: '8px',
		borderRadius: 'sm',
		fontSize: 'sm',
		width: 'max-content'
	},

	variants: {
		position: {
			lowerRight: {},
			lowerLeft: { right: '10000px' }
		}
	}
})
