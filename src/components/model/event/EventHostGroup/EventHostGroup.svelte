<script lang="ts">
	import type { GroupWithCreateUser } from '$models/group'
	import { administratorSection, sectionWrapper, title, groupImage } from './eventHostGroup.style'

	export let name: GroupWithCreateUser['name']
	export let src: GroupWithCreateUser['img_url']
</script>

<section class={sectionWrapper}>
	<h3 class={title}>開催グループ</h3>
	<div class={administratorSection}>
		<img class={groupImage} {src} alt="group img" />
		<span>{name}</span>
	</div>
</section>

<style>
	div {
		display: flex;
		align-items: center;
	}
</style>
