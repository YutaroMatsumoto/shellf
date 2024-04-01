<script lang="ts">
	import Loading from '$ui/Loading/Loading.svelte'
	import { dangerButton } from './recipe'

	export let loading: boolean = false
	export let size: 'sm' | 'lg' = 'lg'
	export let disabled: boolean = false
	export let onClick: (() => void) | undefined = undefined
</script>

<button class={dangerButton({ size, disabled })} on:click={onClick} {...$$restProps}>
	{#if loading}
		<Loading />
	{:else}
		<slot />
	{/if}
</button>
