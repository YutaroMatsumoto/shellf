<script lang="ts">
	import GroupPageTab from '$model/group/GroupPageTab/GroupPageTab.svelte'
	import GroupDetailCard from '$model/group/GroupDetailCard/GroupDetailCard.svelte'
	import type { LayoutData } from './$types'

	export let data: LayoutData
	$: ({ data: group } = data.group)
	$: groupData = group?.[0]
</script>

{#if groupData}
	<GroupDetailCard group={groupData} />
{/if}
<GroupPageTab />

<div>
	<slot />
</div>

<style>
	div {
		/* 38pxはTabItemの高さ + TabItemのborder幅 */
		height: calc(100% - 38px);
		padding: 24px;
	}
</style>
