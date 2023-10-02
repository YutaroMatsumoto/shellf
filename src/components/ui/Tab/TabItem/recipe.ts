import { cva } from 'styled-system/css'

export const tabItem = cva({
	base: {
		lineHeight: '36px',
		fontWeight: 'bold'
	},
	variants: {
		isSelectedTab: {
			true: {
				borderBottom: '2px solid black'
			}
		}
	}
})
