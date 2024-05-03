<script lang="ts">
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { createModal } from '$globalStates/modal'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import DangerButton from '$ui/_button/DangerButton/DangerButton.svelte'
	import SecondaryButton from '$ui/_button/SecondaryButton/SecondaryButton.svelte'
	import H2 from '$ui/_heading/H2/H2.svelte'
	import { buttonWrapper, wrapper } from './deleteEvent.style'
	import { createSnackbar } from '$globalStates/snackbar'

	let loading: boolean = false

	const modal = createModal

	console.log($page)

	const deleteEvent = async () => {
		loading = true
		if ($modal.meta) {
			await fetch(`/api/event/delete/${$modal.meta}`, { method: 'DELETE' })
				.then((response) => {
					console.log({ response })
					response.ok && createSnackbar.addSnackbar('success', 'グループの削除に成功しました')
					/**
					 * MEMO: 現在のページに飛ぶことで、最新のデータを取得し直す。
					 * supabaseのrealtime機能を使うと別の方法を実現できるかも？
					 * 1ページに戻ってしまうという課題はある。
					 * */
					goto($page.url.pathname)
				})
				.catch(() => createSnackbar.addSnackbar('failure', 'グループの削除に失敗しました'))
				.finally(() => (loading = false))
		} else {
			loading = false
			createSnackbar.addSnackbar('failure', 'グループの削除に失敗しました')
		}

		modal.close()
	}
</script>

<div class={wrapper}>
	<H2 title="本当に削除してよろしいですか？" />

	<Spacer />
	<p>イベントデータが削除されます。</p>
	<Spacer />

	<div class={buttonWrapper}>
		<SecondaryButton size="sm" onClick={modal.close}>キャンセル</SecondaryButton>
		<DangerButton method="DELETE" type="submit" size="sm" onClick={deleteEvent} {loading}
			>削除する</DangerButton
		>
	</div>
</div>
