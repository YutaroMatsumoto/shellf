<script lang="ts">
	import { css } from 'styled-system/css'
	import Logo from '$ui/Logo/Logo.svelte'
	import Button from '$ui/Button/Button.svelte'

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
	<Button onClick={() => console.log('ログイン')}>ログイン</Button>
</header>

<style>
</style>
