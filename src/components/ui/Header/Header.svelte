<script lang="ts">
	import Logo from '$ui/Logo/Logo.svelte'
	import { css } from 'styled-system/css'

	const styles = css({
		gridRow: '1',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		padding: '0 20px',
		borderBottomWidth: '1px',
		borderColor: 'gray.200'
	})
</script>

<header class={styles}>
	<Logo />
</header>

<style>
</style>
