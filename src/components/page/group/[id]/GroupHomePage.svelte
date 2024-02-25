<script lang="ts">
	import AdministratorWithAvatar from '$model/group/AdministratorWithAvatar/AdministratorWithAvatar.svelte'
	import AnchorButton from '$ui/_button/AnchorButton/AnchorButton.svelte'
	import type { GroupWithCreateUser } from '$models/group'

	export let group: undefined | GroupWithCreateUser
</script>

<div>
	<div>
		<AnchorButton pathKey="eventNew" params={group?.id} title="イベント作成" />
	</div>
	{#if group}
		<AdministratorWithAvatar name={group.display_name} src={group.avatar_url} />
	{/if}
</div>

<style>
	div {
		display: flex;
	}
</style>
