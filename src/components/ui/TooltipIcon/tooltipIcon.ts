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
		backgroundColor: 'black',
		shadow: 'xl',
		padding: '8px',
		borderRadius: 'sm',
		fontSize: 'sm',
		width: 'max-content',
		color: 'white',
		fontWeight: 'bold',
		_after: {
			content: '""',
			height: '5px',
			width: '10px',
			position: 'absolute',
			backgroundColor: 'black'
		}
	},

	variants: {
		position: {
			lowerRight: {
				left: '0px',
				top: '30px',
				_after: {
					clipPath: 'polygon(50% 0,100% 100%,0 100%)',
					top: '-5px',
					left: '10px'
				}
			},
			lowerLeft: {
				right: '0px',
				top: '30px',
				_after: {
					clipPath: 'polygon(50% 0,100% 100%,0 100%)',
					top: '-5px',
					right: '10px'
				}
			}
		}
	}
})

export const message = css({
	color: 'white'
})
