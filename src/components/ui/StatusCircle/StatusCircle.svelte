<script lang="ts">
	import type { Status } from '$globalStates/snackbar'
	import { statusCircle } from './recipe'

	export let status: Status | undefined
</script>

{#if status}
	<div class={statusCircle({ status })} />
{/if}
