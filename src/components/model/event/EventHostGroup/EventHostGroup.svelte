<script lang="ts">
	import type { GroupWithCreateUser } from '$models/group'
	import SectionBoxWithTitle from '$ui/SectionBoxWithTitle/SectionBoxWithTitle.svelte'
	import { hostGroupArea, groupImage } from './eventHostGroup.style'

	export let name: GroupWithCreateUser['name']
	export let src: GroupWithCreateUser['img_url']
</script>

<SectionBoxWithTitle title="開催グループ">
	<div class={hostGroupArea}>
		<img class={groupImage} {src} alt="group img" />
		<span>{name}</span>
	</div>
</SectionBoxWithTitle>
