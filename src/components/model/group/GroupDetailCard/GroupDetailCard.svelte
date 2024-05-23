<script lang="ts">
	import { createModal } from '$globalStates/modal'
	import { getUser } from '$globalStates/user'
	import GroupName from '$model/group/GroupDetailCard/GroupName/GroupName.svelte'
	import type { GroupWithCreateUser } from '$models/group'
	import DangerButton from '$ui/_button/DangerButton/DangerButton.svelte'
	import EditModeSwitchToggle from '$ui/EditModeSwitchToggle/EditModeSwitchToggle.svelte'
	import type { SuperValidated } from 'sveltekit-superforms'
	import { cardWrapper, groupImage, editModeWrapper, buttonWrapper } from './gorupDetailCard.style'
	import type { GroupNameShema } from '$repositories/group/schema'

	export let group: GroupWithCreateUser
	export let isEditMode: boolean
	export let editModeSwitch: () => void
	export let groupNameForm: SuperValidated<GroupNameShema>

	const modal = createModal
	const user = getUser()
</script>

<article class={cardWrapper}>
	<img class={groupImage} src={group.img_url} alt="group img" />
	<GroupName {isEditMode} id={group.id} name={group.name} {groupNameForm} />

	{#if $user?.id && $user?.id === group.created_by}
		<div class={editModeWrapper}>
			<EditModeSwitchToggle label="編集モード" {isEditMode} onClick={editModeSwitch} />
			{#if isEditMode}
				<div class={buttonWrapper}>
					<DangerButton size="sm" onClick={modal.deleteGroup}>削除する</DangerButton>
				</div>
			{/if}
		</div>
	{/if}
</article>
