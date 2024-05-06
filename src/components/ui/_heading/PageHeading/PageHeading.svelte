<script lang="ts">
	import { css } from 'styled-system/css'
	export let title: string
	export let textAlignCenter: boolean = false

	$: pageHeading = css({
		fontSize: '2xl',
		fontWeight: 'bold',
		textAlign: textAlignCenter ? 'center' : 'start'
	})
</script>

<h1 class={pageHeading}>{title}</h1>
