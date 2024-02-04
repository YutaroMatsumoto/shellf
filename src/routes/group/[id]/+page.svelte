<script lang="ts">
	import AdministratorWithAvatar from '$model/group/AdministratorWithAvatar/AdministratorWithAvatar.svelte'
	import AnchorButton from '$ui/_button/AnchorButton/AnchorButton.svelte'
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ data: group } = data.group)
	$: groupData = group?.[0]
</script>

<div>
	<div>
		<AnchorButton pathKey="eventNew" params={groupData?.id} title="イベント作成" />
	</div>
	{#if groupData}
		<AdministratorWithAvatar name={groupData.display_name} src={groupData.avatar_url} />
	{/if}
</div>

<style>
	div {
		display: flex;
	}
</style>
