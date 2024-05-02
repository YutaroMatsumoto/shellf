<script lang="ts">
	import { css } from 'styled-system/css'

	export let title: string
	/** fontsizeもpropsで受け取れた方が良いかも？ */

	const subHeading = css({
		fontSize: 'xl',
		fontWeight: 'bold',
		whiteSpace: 'pre-wrap'
	})
</script>

<h2 class={subHeading}>{title}</h2>
