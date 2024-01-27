<script lang="ts">
	import { css } from 'styled-system/css'
	import Logo from '$ui/_layout/Logo/Logo.svelte'
	import Button from '$ui/_button/Button.svelte'
	import { getUser } from '$globalStates/user'
	import UserAvatarButton from '$model/user/UserAvatarButton/UserAvatarButton.svelte'
	import { createModal } from '$globalStates/modal'
	import { getSession } from '$globalStates/session'

	const styles = css({
		position: 'fixed',
		top: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '60px',
		width: '100%',
		padding: '8px 24px',
		bg: 'white'
	})

	const session = getSession()
	const user = getUser()
	const modal = createModal
</script>

<header class={styles}>
	<Logo />
	{#if session}
		<UserAvatarButton src={$user?.avatar_url} />
	{:else if !session}
		<Button onClick={modal.login}>ログイン</Button>
	{/if}
</header>
