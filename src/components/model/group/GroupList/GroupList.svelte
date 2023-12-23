<script lang="ts">
	import GroupCard from '$model/group/GroupList/GroupCard/GroupCard.svelte'
	import type { Groups } from 'src/models/group'

	export let groups: Groups
</script>

<ul>
	{#each groups as group (group.id)}
		<GroupCard id={group.id} name={group.name} imgSrc={group.img_url} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
