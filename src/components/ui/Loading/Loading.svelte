<script lang="ts">
	import { css } from 'styled-system/css'

	export let size: number = 20

	const loading = css({
		width: `${size}px`,
		height: `${size}px`,
		borderRadius: '50%',
		border: 'solid 2px',
		borderTopColor: 'white',
		borderRightColor: 'white',
		borderBottomColor: 'white',
		borderLeftColor: 'gray.300',
		animationName: 'spin',
		animationDuration: '1s',
		animationIterationCount: 'infinite'
	})
</script>

<div class={loading} />
