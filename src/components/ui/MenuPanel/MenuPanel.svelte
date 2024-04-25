<!-- 一般的にはpopoverと呼ばれるUI? -->
<script lang="ts">
	import { css } from 'styled-system/css'
	import { onMount } from 'svelte'

	export let top: string = '40px'
	export let left: string = '-200px'
	export let onClose: () => void

	let ref: HTMLDivElement | null = null

	const menuPanel = css({
		position: 'absolute',
		borderRadius: 'sm',
		shadow: 'lg',
		minWidth: '240px',
		left,
		top,
		marginY: '4px',
		bg: 'white'
	})

	onMount(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				ref &&
				!ref?.contains(event.target as Node) &&
				(event.target as HTMLElement).id !== 'profile-icon'
			) {
				onClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	})
</script>

<div tabindex="-1" class={menuPanel} bind:this={ref}>
	<slot />
</div>
