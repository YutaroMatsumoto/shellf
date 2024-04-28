<script lang="ts">
	import { createModal } from '$globalStates/modal'
	import { getUser } from '$globalStates/user'
	import type { GroupWithCreateUser } from '$models/group'
	import DangerButton from '$ui/_button/DangerButton/DangerButton.svelte'
	import { cardWrapper, groupName, groupImage, dangerButtonWrapper } from './gorupDetailCard.style'

	export let group: GroupWithCreateUser

	const modal = createModal
	const user = getUser()
</script>

<article class={cardWrapper}>
	<img class={groupImage} src={group.img_url} alt="group img" />
	<h2 class={groupName}>{group.name}</h2>

	<!-- TODO: グループ管理者の場合だけボタンを表示する -->
	{#if $user?.id && $user?.id === group.created_by}
		<div class={dangerButtonWrapper}>
			<DangerButton size="sm" onClick={modal.deleteGroup}>削除する</DangerButton>
		</div>
	{/if}
</article>
