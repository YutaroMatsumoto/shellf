<script lang="ts">
	import type { GroupWithCreateUser } from '$models/group'
	import UserAvatar from '$model/user/UserAvatar/UserAvatar.svelte'
	import { administratorSection, sectionWrapper, title } from './administratorWithAvatar.style'

	export let name: GroupWithCreateUser['display_name']
	export let src: GroupWithCreateUser['avatar_url']
</script>

<section class={sectionWrapper}>
	<p class={title}>管理者</p>
	<section class={administratorSection}>
		<UserAvatar {src} />
		<span>{name}</span>
	</section>
</section>
