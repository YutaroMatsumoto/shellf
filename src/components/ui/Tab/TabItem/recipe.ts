import { cva } from 'styled-system/css'

// このコンポーネントの高さは38pxになる
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
