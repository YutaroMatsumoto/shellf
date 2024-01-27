<script lang="ts">
	import UserAvatar from '$model/user/UserAvatar/UserAvatar.svelte'
	import UserMenuPanel from '$model/user/UserAvatarButton/UserMenuPanel/UserMenuPanel.svelte'
	import { css } from 'styled-system/css'

	let displayMenuPanel: boolean = false
	export let src: string | null | undefined

	function changePanelDiaplayState() {
		displayMenuPanel = !displayMenuPanel
	}

	function onClose() {
		displayMenuPanel = false
	}

	const avatarWrapper = css({
		position: 'relative',
		height: '40px'
	})
	const avatarButton = css({
		cursor: 'pointer'
	})
</script>

<div class={avatarWrapper}>
	<button class={avatarButton} on:click={changePanelDiaplayState}>
		<UserAvatar {src} />
	</button>
	{#if displayMenuPanel}
		<UserMenuPanel {onClose} />
	{/if}
</div>
