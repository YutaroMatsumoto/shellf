<script lang="ts">
	import { css } from 'styled-system/css'
	import type { GroupWithCreateUser } from '$models/group'
	import UserAvatar from '$model/user/UserAvatar/UserAvatar.svelte'
	import SectionBoxWithTitle from '$ui/SectionBoxWithTitle/SectionBoxWithTitle.svelte'

	export let name: GroupWithCreateUser['display_name']
	export let src: GroupWithCreateUser['avatar_url']

	const sectionWrapper = css({
		marginLeft: 'auto',
		width: '240px'
	})

	const content = css({
		display: 'flex',
		alignItems: 'center',
		gap: '8px'
	})
</script>

<div class={sectionWrapper}>
	<SectionBoxWithTitle title="管理者">
		<div class={content}>
			<UserAvatar {src} />
			<span>{name}</span>
		</div>
	</SectionBoxWithTitle>
</div>
