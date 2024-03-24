<script lang="ts">
	import GroupPageTab from '$model/group/GroupPageTab/GroupPageTab.svelte'
	import GroupDetailCard from '$model/group/GroupDetailCard/GroupDetailCard.svelte'
	import type { GroupWithCreateUser } from '$models/group'

	export let group: undefined | GroupWithCreateUser
</script>

{#if group}
	<GroupDetailCard {group} />
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
		margin: 0px auto;
		max-width: 1280px;
	}
</style>
