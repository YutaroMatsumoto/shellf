<script lang="ts">
	import { menuItem, userMenu } from '$model/user/UserAvatarButton/UserMenuPanel/userMenuPanel'
	import MenuPanel from '$ui/MenuPanel/MenuPanel.svelte'
	import LogoutButton from '$ui/_button/LogoutButton/LogoutButton.svelte'

	export let onClose: () => void
</script>

<MenuPanel {onClose}>
	{#each userMenu as userMenuItem}
		<a class={menuItem} href={userMenuItem.href} on:click={onClose}>
			{userMenuItem.title}
		</a>
	{/each}
	<LogoutButton style={menuItem} {onClose} />
</MenuPanel>
