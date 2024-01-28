<script lang="ts">
	import type { GroupWithCreateUser } from 'src/models/group'
	import { cardWrapper, groupName, groupImage } from './gorupDetailCard.style'

	export let group: GroupWithCreateUser
</script>

<article class={cardWrapper}>
	<img class={groupImage} src={group.img_url} alt="group img" />
	<h2 class={groupName}>{group.name}</h2>
</article>
