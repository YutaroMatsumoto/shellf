<script lang="ts">
	import { css } from 'styled-system/css'

	const error = css({
		fontSize: 'sm',
		fontWeight: '600',
		color: 'red.500'
	})
</script>

<span class={error} {...$$restProps}><slot /></span>
