<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { createModal } from '$globalStates/modal'
	import { getUser } from '$globalStates/user'
	import { generatePath } from '$lib/route'
	import type { GroupWithCreateUser } from '$models/group'
	import DangerButton from '$ui/_button/DangerButton/DangerButton.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import { cardWrapper, groupName, groupImage, buttonWrapper } from './gorupDetailCard.style'

	export let group: GroupWithCreateUser

	const modal = createModal
	const user = getUser()
</script>

<article class={cardWrapper}>
	<img class={groupImage} src={group.img_url} alt="group img" />
	<h2 class={groupName}>{group.name}</h2>

	<!-- TODO: グループ管理者の場合だけボタンを表示する -->
	{#if $user?.id && $user?.id === group.created_by}
		<div class={buttonWrapper}>
			<PrimaryButton size="sm" onClick={() => goto(generatePath('groupEdit', [$page.params.id]))}
				>編集する</PrimaryButton
			>
			<DangerButton size="sm" onClick={modal.deleteGroup}>削除する</DangerButton>
		</div>
	{/if}
</article>
