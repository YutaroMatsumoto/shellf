<script lang="ts">
	import InfoIcon from '$ui/icon/InfoIcon.svelte'
	import EditIcon from '$ui/icon/EditIcon.svelte'
	import DeleteIcon from '$ui/icon/DeleteIcon.svelte'
	import SaveIcon from '$ui/icon/SaveIcon.svelte'
	import type { IconType, IconFillType } from '$ui/icon/iconType'
	import { tooltip, wrapper, type TooltipPosition } from './tooltipIcon'

	export let iconType: IconType = 'info'
	export let size: number = 24
	export let message: string
	export let position: TooltipPosition = 'lowerRight'
	export let fill: IconFillType = 'black'

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
		<InfoIcon {size} {fill} />
		<!-- MEMO: sizeについては要検討 -->
	{:else if iconType === 'edit'}
		<EditIcon {size} {fill} />
	{:else if iconType === 'save'}
		<SaveIcon {size} {fill} />
	{:else if iconType === 'delete'}
		<DeleteIcon {size} {fill} />
	{/if}

	{#if isHover}
		<div class={tooltip({ position })}>
			<p>{message}</p>
		</div>
	{/if}
</div>
