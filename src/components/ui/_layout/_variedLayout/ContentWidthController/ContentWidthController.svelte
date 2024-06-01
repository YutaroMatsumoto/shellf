<!-- contentの最大横幅を設定するためのもの -->
<script lang="ts">
	import { css } from 'styled-system/css'

	export let havePadding: boolean = true

	const wrapper = css({
		maxWidth: '1280px',
		minWidth: '768px', // ipad mini
		padding: havePadding ? '24px' : '0px',
		marginX: 'auto'
	})
</script>

<div class={wrapper}>
	<slot />
</div>
