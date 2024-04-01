<script lang="ts">
	import { css } from 'styled-system/css'
	import InfoIcon from '$ui/icon/InfoIcon.svelte'

	export let iconType: 'info' = 'info'
	export let size: number = 16
	export let message: string

	let isHover = false

	function handleMouseover() {
		isHover = true
	}

	function handleMouseout() {
		isHover = false
	}

	const wrapper = css({
		position: 'relative',
		zIndex: 10
	})

	const tooltip = css({
		position: 'absolute',
		backgroundColor: 'white',
		shadow: 'lg',
		padding: '8px',
		borderRadius: 'sm',
		fontSize: 'sm',
		width: '280px'
	})
</script>

<!-- ↓divにmouseover等のイベントを割り当てることを許容する -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={wrapper}
	on:mouseover={handleMouseover}
	on:focus={handleMouseover}
	on:mouseout={handleMouseout}
	on:blur={handleMouseout}
>
	{#if iconType === 'info'}
		<InfoIcon {size} />
	{/if}

	{#if isHover}
		<div class={tooltip}>
			<p>
				{message}
			</p>
		</div>
	{/if}
</div>
