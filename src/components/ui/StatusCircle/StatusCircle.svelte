<script lang="ts">
	import type { Status } from '$globalStates/snackbar'
	import { statusCircle } from './recipe'

	export let status: Status
</script>

{#if status}
	<div class={statusCircle({ status })} />
{/if}
