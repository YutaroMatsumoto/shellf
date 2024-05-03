<script lang="ts">
	import { css } from 'styled-system/css'
	import TooltipIcon from '$ui/TooltipIcon/TooltipIcon.svelte'
	import type { IconType } from '$ui/icon/iconType'
	import type { TooltipPosition } from '$ui/TooltipIcon/tooltipIcon'

	export let iconType: IconType
	export let onClick: () => void
	export let message: string
	export let position: TooltipPosition = 'lowerRight'

	const iconButton = css({
		width: '32px',
		height: '32px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 'sm',
		cursor: 'pointer',
		_hover: {
			backgroundColor: 'gray.100'
		}
	})
</script>

<button class={iconButton} on:click={onClick}>
	<TooltipIcon {iconType} {message} {position} />
</button>
