<script lang="ts">
	import { css } from 'styled-system/css'

	const menuPanel = css({
		position: 'absolute',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm',
		shadow: 'sm',
		minWidth: '240px',
		left: '-200px',
		marginY: '4px'
	})
</script>

<div tabindex="-1" class={menuPanel}>
	<slot />
</div>
