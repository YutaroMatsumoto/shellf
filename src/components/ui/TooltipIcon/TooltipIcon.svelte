<script lang="ts">
	import InfoIcon from '$ui/icon/InfoIcon.svelte'
	import EditIcon from '$ui/icon/EditIcon.svelte'
	import DeleteIcon from '$ui/icon/DeleteIcon.svelte'
	import SaveIcon from '$ui/icon/SaveIcon.svelte'
	import type { IconType } from '$ui/icon/iconType'
	import { tooltip, wrapper, type TooltipPosition } from './tooltipIcon'

	export let iconType: IconType = 'info'
	export let size: number = 16
	export let message: string
	export let position: TooltipPosition = 'lowerRight'

	let isHover = false

	function handleMouseover() {
		isHover = true
	}

	function handleMouseout() {
		isHover = false
	}
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
		<!-- MEMO: sizeについては要検討 -->
	{:else if iconType === 'edit'}
		<EditIcon />
	{:else if iconType === 'save'}
		<SaveIcon />
	{:else if iconType === 'delete'}
		<DeleteIcon />
	{/if}

	<!-- {#if isHover} -->
	<p class={tooltip({ position })}>
		{message}
	</p>
	<!-- {/if} -->
</div>
