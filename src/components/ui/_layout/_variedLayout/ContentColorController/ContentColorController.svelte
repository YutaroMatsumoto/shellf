<!-- contentの背景色を設定するためのもの -->
<script lang="ts">
	import { css } from 'styled-system/css'

	export let backgroundColor: 'white' | 'gray.50' = 'white'

	$: wrapper = css({
		width: '100%',
		backgroundColor
	})
</script>

<div class={wrapper}>
	<slot />
</div>
