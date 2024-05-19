<script lang="ts">
	import { css } from 'styled-system/css'
	import type { PageData } from './$types'
	import AdministratorWithAvatar from '$model/group/AdministratorWithAvatar/AdministratorWithAvatar.svelte'
	import { createGroupEditMode } from '$globalStates/group'
	import GroupDescription from '$model/group/GroupDescription/GroupDescription.svelte'

	export let data: PageData
	$: ({ data: group } = data.group)
	$: ({ groupDescriptionForm } = data)
	$: groupData = group?.[0]

	const groupEditMode = createGroupEditMode

	const pageWrapper = css({
		display: 'flex',
		gap: '40px'
	})

	const markdownWrapper = css({
		width: 'calc(100% - 280px)',
		minWidth: '440px'
	})
</script>

<div class={pageWrapper}>
	<div class={markdownWrapper}>
		<GroupDescription
			isEditMode={$groupEditMode === 'on'}
			id={groupData?.id ?? ''}
			description={groupData?.description ?? ''}
			{groupDescriptionForm}
		/>
	</div>

	{#if groupData}
		<AdministratorWithAvatar name={groupData.display_name} src={groupData.avatar_url} />
	{/if}
</div>
