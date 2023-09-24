<script lang="ts">
	import { css } from 'styled-system/css'

	const menuPanel = css({
		position: 'absolute',
		borderRadius: 'sm',
		shadow: 'lg',
		minWidth: '240px',
		left: '-200px',
		marginY: '4px',
		bg: 'white'
	})
</script>

<div tabindex="-1" class={menuPanel}>
	<slot />
</div>
