<script lang="ts">
	import { page } from '$app/stores'
	import DangerButton from '$ui/_button/DangerButton/DangerButton.svelte'
	import { deleteEvent } from '$usecases/event'

	let loading: boolean = false
	const startFetch = () => {
		loading = true
	}
	const endFetch = () => {
		loading = false
	}
</script>

<div>
	<DangerButton
		method="DELETE"
		type="submit"
		size="sm"
		onClick={() => deleteEvent($page.params.id, $page.params.eventId, startFetch, endFetch)}
		{loading}>削除する</DangerButton
	>
</div>

<style>
	div {
		width: 64px;
		margin-left: auto;
		margin-top: 8px;
	}
</style>
