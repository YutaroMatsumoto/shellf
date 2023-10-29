<script lang="ts">
	import { button } from './recipe'

	export let variant: 'primary' | 'secondary' | 'danger' = 'primary'
	export let size: 'sm' | 'lg' = 'lg'
	export let onClick: () => void
</script>

<button class={button({ size, variant })} on:click={onClick} {...$$restProps}><slot /></button>
