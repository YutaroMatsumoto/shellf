/** buttonに関するstyleのみを提供する */
import { css } from 'styled-system/css'
import { flexRowBaseStyle } from '$ui/_style/flexRowBase.style'

export const buttonGroupArea = css({
	...flexRowBaseStyle,
	width: '100%',
	alignItems: 'center',
	justifyContent: 'center'
})
