<script lang="ts">
	import { css, cva } from 'styled-system/css'
	import TooltipIcon from '$ui/TooltipIcon/TooltipIcon.svelte'
	import type { IconType } from '$ui/icon/iconType'
	import type { TooltipPosition } from '$ui/TooltipIcon/tooltipIcon'

	export let iconType: IconType
	export let message: string
	export let position: TooltipPosition = 'lowerRight'
	export let disabled: boolean = false
	export let onClick: (() => void) | undefined = undefined

	$: iconButton = css({
		width: '32px',
		height: '32px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 'sm',
		cursor: disabled ? 'not-allowed' : 'pointer',
		_hover: {
			backgroundColor: disabled ? 'none' : 'gray.100'
		}
	})
</script>

<button class={iconButton} on:click={onClick} {...$$restProps} {disabled}>
	<TooltipIcon {iconType} {message} {position} fill={disabled ? 'gray' : 'black'} />
</button>
