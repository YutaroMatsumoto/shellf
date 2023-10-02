<script lang="ts">
	import { css } from 'styled-system/css'
	import { onMount } from 'svelte'

	export let onClose: () => void

	const menuPanel = css({
		position: 'absolute',
		borderRadius: 'sm',
		shadow: 'lg',
		minWidth: '240px',
		left: '-200px',
		marginY: '4px',
		bg: 'white'
	})

	onMount(() => {
		document.addEventListener('mousedown', onClose)

		return () => {
			document.removeEventListener('mousedown', onClose)
		}
	})
</script>

<div tabindex="-1" class={menuPanel}>
	<slot />
</div>
