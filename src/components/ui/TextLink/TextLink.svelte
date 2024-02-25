<script lang="ts">
	import { css } from 'styled-system/css'

	export let text: string
	export let href: string = '#'
	export let isBack: boolean = false

	const anchor = css({
		color: 'green.500',
		textDecoration: 'underline',
		cursor: 'pointer',
		_hover: { color: 'green.600' }
	})

	function goBack() {
		window.history.back()
	}
</script>

{#if isBack}
	<button class={anchor} on:click={goBack}>{text}</button>
{:else}
	<a class={anchor} {href}>{text}</a>
{/if}
