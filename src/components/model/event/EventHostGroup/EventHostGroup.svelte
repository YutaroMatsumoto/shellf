<script lang="ts">
	import type { GroupWithCreateUser } from '$models/group'
	import { hostGroupArea, sectionWrapper, title, groupImage } from './eventHostGroup.style'

	export let name: GroupWithCreateUser['name']
	export let src: GroupWithCreateUser['img_url']
</script>

<section class={sectionWrapper}>
	<h3 class={title}>開催グループ</h3>
	<div class={hostGroupArea}>
		<img class={groupImage} {src} alt="group img" />
		<span>{name}</span>
	</div>
</section>
