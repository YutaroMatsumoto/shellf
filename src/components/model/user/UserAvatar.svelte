<script lang="ts">
	import UserMenuPanel from '$model/user/UserMenuPanel/UserMenuPanel.svelte'
	import { css } from 'styled-system/css'

	let displayMenuPanel: boolean = false
	export let src: string | null | undefined

	function changePanelDiaplayState() {
		displayMenuPanel = !displayMenuPanel
	}

	const avatarWrapper = css({
		position: 'relative'
	})
	const avatarButton = css({
		cursor: 'pointer'
	})
</script>

<div class={avatarWrapper}>
	<button class={avatarButton} on:click={changePanelDiaplayState}>
		<img {src} alt="profile icon" />
	</button>
	{#if displayMenuPanel}
		<UserMenuPanel />
	{/if}
</div>

<style>
	img {
		height: 40px;
		border-radius: 3px;
	}
</style>
