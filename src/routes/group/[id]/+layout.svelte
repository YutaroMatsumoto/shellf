<script lang="ts">
	import GroupPageTab from '$model/group/GroupPageTab/GroupPageTab.svelte'
	import GroupDetailCard from '$model/group/GroupDetailCard/GroupDetailCard.svelte'
	import type { LayoutData } from './$types'
	import { createGroupEditMode } from '$globalStates/group'
	import { onDestroy } from 'svelte'
	import ContentColorController from '$ui/_layout/_variedLayout/ContentColorController/ContentColorController.svelte'
	import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'

	export let data: LayoutData

	const groupEditMode = createGroupEditMode
	$: editModeSwitch = () => {
		$groupEditMode === 'on' ? groupEditMode.turnOff() : groupEditMode.turnOn()
	}

	onDestroy(() => groupEditMode.turnOff())

	$: ({ data: group } = data.group)
	$: groupData = group?.[0]
</script>

<ContentColorController>
	<ContentWidthController havePadding={false}>
		{#if groupData}
			<GroupDetailCard
				isEditMode={$groupEditMode === 'on'}
				{editModeSwitch}
				group={groupData}
				groupNameForm={data.groupNameForm}
			/>
		{/if}
		<GroupPageTab />
	</ContentWidthController>
</ContentColorController>

<ContentWidthController>
	<div>
		<slot />
	</div>
</ContentWidthController>

<style>
	div {
		/* 38pxはTabItemの高さ + TabItemのborder幅 */
		height: calc(100% - 38px);
	}
</style>
