<script lang="ts">
	import type { DeplicatedGroup } from 'src/models/group'
	import { cardWrapper, groupName, groupImage } from './gorupDetailCard.style'

	export let group: DeplicatedGroup
</script>

<section class={cardWrapper}>
	<img class={groupImage} src={group.img_url} alt="group img" />
	<h2 class={groupName}>{group.name}</h2>
</section>
