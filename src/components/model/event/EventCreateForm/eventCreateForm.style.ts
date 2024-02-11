import { css } from 'styled-system/css'
import { flexRowBaseStyle } from '$ui/_style/flexRowBase.style'

export const formWrapper = css({
	width: '100%',
	marginTop: '20px'
})

export const dateTimeArea = css({
	...flexRowBaseStyle,
	width: '250px'
})

export const flexBox = css({
	...flexRowBaseStyle
})

export const timeToggleArea = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px'
})
