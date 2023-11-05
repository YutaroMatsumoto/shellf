<script lang="ts">
	import Loading from '$ui/Loading/Loading.svelte'
	import { primaryButton } from './recipe'

	export let loading: boolean = false
	export let size: 'sm' | 'lg' = 'lg'
	export let onClick: (() => void) | undefined = undefined
</script>

<button class={primaryButton({ size })} on:click={onClick} {...$$restProps}>
	{#if loading}
		<Loading />
	{:else}
		<slot />
	{/if}
</button>
