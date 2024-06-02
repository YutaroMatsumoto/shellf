<script lang="ts">
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { createSnackbar } from '$globalStates/snackbar'
	import { generatePath } from '$lib/route'
	import DangerButton from '$ui/_button/DangerButton/DangerButton.svelte'

	let loading: boolean = false

	const deleteEvent = async () => {
		if (!window.confirm('イベントを削除しますか？')) {
			return
		}
		await fetch(`/api/event/delete/${$page.params.eventId}`, { method: 'DELETE' })
			.then((response) => {
				response.ok && createSnackbar.addSnackbar('success', 'イベントの削除に成功しました')
				goto(generatePath('groupEventList', [$page.params.id]))
			})
			.catch(() => createSnackbar.addSnackbar('failure', 'イベントの削除に失敗しました'))
			.finally(() => (loading = false))
	}
</script>

<div>
	<DangerButton method="DELETE" type="submit" size="sm" onClick={deleteEvent} {loading}
		>削除する</DangerButton
	>
</div>

<style>
	div {
		width: 64px;
		margin-left: auto;
		margin-top: 8px;
	}
</style>
