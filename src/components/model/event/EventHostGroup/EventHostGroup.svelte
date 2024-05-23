<script lang="ts">
	import { css } from 'styled-system/css'
	import type { GroupWithCreateUser } from '$models/group'
	import SectionBoxWithTitle from '$ui/SectionBoxWithTitle/SectionBoxWithTitle.svelte'

	export let name: GroupWithCreateUser['name']
	export let src: GroupWithCreateUser['img_url']

	const groupImage = css({
		width: '100px',
		height: '100px',
		objectFit: 'contain',
		border: '1px solid',
		borderRadius: 'sm',
		borderColor: 'gray.300'
	})

	const hostGroupArea = css({
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		gap: '20px',
		backgroundColor: 'white'
	})
</script>

<SectionBoxWithTitle title="開催グループ">
	<div class={hostGroupArea}>
		<img class={groupImage} {src} alt="group img" />
		<span>{name}</span>
	</div>
</SectionBoxWithTitle>
