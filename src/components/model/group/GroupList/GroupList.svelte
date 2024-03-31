<script lang="ts">
	import GroupCard from '$model/group/GroupList/GroupCard/GroupCard.svelte'
	import type { Groups } from '$models/group'

	export let groups: Groups
</script>

<ul>
	{#each groups as { id, name, img_url: imgSrc, is_admin: isAdmin } (id)}
		<GroupCard {id} {name} {imgSrc} {isAdmin} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
