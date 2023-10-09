<script lang="ts">
	import { button } from './recipe'

	export let type: 'primary' | 'secondary' | 'danger' = 'primary'
	export let size: 'sm' | 'lg' = 'lg'
	export let onClick: () => void
</script>

<button class={button({ size, type })} on:click={onClick}><slot /></button>
