<script lang="ts">
	import { css } from 'styled-system/css'
	import Logo from '$ui/Logo/Logo.svelte'
	import AnchorButton from '$ui/AnchorButton/AnchorButton.svelte'

	const styles = css({
		gridRow: '1',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		padding: '0 20px',
		borderBottomWidth: '1px',
		borderColor: 'gray.200'
	})
</script>

<header class={styles}>
	<Logo />
	<AnchorButton title="ログイン" href="login" />
</header>

<style>
</style>
