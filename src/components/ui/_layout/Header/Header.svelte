<script lang="ts">
	import { css } from 'styled-system/css'
	import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'
	import Logo from '$ui/_layout/Logo/Logo.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import { getUser } from '$globalStates/user'
	import UserAvatarButton from '$model/user/UserAvatarButton/UserAvatarButton.svelte'
	import { createModal } from '$globalStates/modal'
	import { getSession } from '$globalStates/session'

	const header = css({
		position: 'fixed',
		top: '0',
		height: '60px',
		width: '100%',
		bg: 'white',
		shadow: 'sm',
		zIndex: '100'
	})

	const headerContent = css({
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '8px 24px'
	})

	const session = getSession()
	const user = getUser()
	const modal = createModal
</script>

<header class={header}>
	<ContentWidthController havePadding={false}>
		<div class={headerContent}>
			<Logo />
			{#if session}
				<UserAvatarButton src={$user?.avatar_url} />
			{:else if !session}
				<PrimaryButton onClick={modal.login}>ログイン</PrimaryButton>
			{/if}
		</div>
	</ContentWidthController>
</header>
