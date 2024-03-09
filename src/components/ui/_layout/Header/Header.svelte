<script lang="ts">
	import { css } from 'styled-system/css'
	import Logo from '$ui/_layout/Logo/Logo.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import { getUser } from '$globalStates/user'
	import UserAvatarButton from '$model/user/UserAvatarButton/UserAvatarButton.svelte'
	import { createModal } from '$globalStates/modal'
	import { getSession } from '$globalStates/session'

	const header = css({
		position: 'fixed',
		top: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '60px',
		width: '100%',
		padding: '8px 24px',
		bg: 'white',
		shadow: 'sm',
		zIndex: '100'
	})

	const session = getSession()
	const user = getUser()
	const modal = createModal
</script>

<header class={header}>
	<Logo />
	{#if session}
		<UserAvatarButton src={$user?.avatar_url} />
	{:else if !session}
		<PrimaryButton onClick={modal.login}>ログイン</PrimaryButton>
	{/if}
</header>
