<script lang="ts">
	import { css } from 'styled-system/css'
	import type { GroupWithCreateUser } from '$models/group'
	import SectionBoxWithTitle from '$ui/SectionBoxWithTitle/SectionBoxWithTitle.svelte'

	export let name: GroupWithCreateUser['name']
	export let src: GroupWithCreateUser['img_url']

	const hostGroupArea = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '4px',
		backgroundColor: 'white'
	})

	const groupImage = css({
		width: '192px',
		height: '108px',
		objectFit: 'contain',
		border: '1px solid',
		borderRadius: 'sm',
		borderColor: 'gray.300'
	})
</script>

<SectionBoxWithTitle title="開催グループ">
	<div class={hostGroupArea}>
		<img class={groupImage} {src} alt="group img" />
		<span>{name}</span>
	</div>
</SectionBoxWithTitle>
