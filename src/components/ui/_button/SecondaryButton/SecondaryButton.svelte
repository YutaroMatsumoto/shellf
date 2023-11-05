<script lang="ts">
	import Loading from '$ui/Loading/Loading.svelte'
	import { secondaryButton } from './recipe'

	export let loading: boolean = false
	export let size: 'sm' | 'lg' = 'lg'
	export let onClick: (() => void) | undefined = undefined
</script>

<button class={secondaryButton({ size })} on:click={onClick} {...$$restProps}>
	{#if loading}
		<Loading />
	{:else}
		<slot />
	{/if}
</button>
