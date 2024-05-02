<script lang="ts">
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { createModal } from '$globalStates/modal'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import DangerButton from '$ui/_button/DangerButton/DangerButton.svelte'
	import SecondaryButton from '$ui/_button/SecondaryButton/SecondaryButton.svelte'
	import SubHeading from '$ui/_heading/SubHeading/SubHeading.svelte'
	import { buttonWrapper, wrapper } from './deleteGroup.style'
	import { createSnackbar } from '$globalStates/snackbar'
	import { generatePath } from '$lib/route'

	let loading: boolean = false

	const modal = createModal

	const deleteGroup = async () => {
		if (!window.confirm('本当の本当に削除しますか？')) {
			modal.close()
			return
		}
		loading = true
		await fetch(`/api/group/delete/${$page.params.id}`, { method: 'DELETE' })
			.then((response) => {
				console.log('あいうえお', { response })
				response.ok && createSnackbar.addSnackbar('success', 'グループの削除に成功しました')
				goto(generatePath('my'))
			})
			.catch(() => createSnackbar.addSnackbar('failure', 'グループの削除に失敗しました'))
			.finally(() => (loading = false))
		modal.close()
	}
</script>

<div class={wrapper}>
	<SubHeading title={`本当に削除しますか？\n危険な操作です。`} />

	<Spacer />
	<p>グループデータだけでなく、</p>
	<p>グループのイベントや記録も削除されます。</p>
	<Spacer />

	<div class={buttonWrapper}>
		<SecondaryButton size="sm" onClick={modal.close}>キャンセル</SecondaryButton>
		<DangerButton method="DELETE" type="submit" size="sm" onClick={deleteGroup} {loading}
			>削除する</DangerButton
		>
	</div>
</div>
