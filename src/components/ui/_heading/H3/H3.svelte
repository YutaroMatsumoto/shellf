<script lang="ts">
	import { css } from 'styled-system/css'

	export let title: string
	/** fontsizeもpropsで受け取れた方が良いかも？ */

	const h3 = css({
		fontSize: 'l',
		fontWeight: 'bold',
		whiteSpace: 'pre-wrap'
	})
</script>

<h3 class={h3}>{title}</h3>
