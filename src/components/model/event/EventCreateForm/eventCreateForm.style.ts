import { css } from 'styled-system/css'
import { flexRowBaseStyle } from '$ui/_style/flexRowBase.style'

export const formWrapper = css({
	width: '100%',
	marginTop: '20px'
})

export const dateTimeArea = css({
	...flexRowBaseStyle,
	minWidth: '300px'
})

export const flexBox = css({
	display: 'flex'
})

export const timeToggleArea = css({
	...flexRowBaseStyle,
	marginLeft: '52px'
})

export const edndDateTimeArea = css({
	width: '186px'
})
