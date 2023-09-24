<script lang="ts">
	import { menuItem, userMenu } from '$model/user/UserMenuPanel/userMenuPanel'
	import MenuPanel from '$ui/MenuPanel/MenuPanel.svelte'
	import UserMenuPanelItem from '$model/user/UserMenuPanel/UserMenuPanelItem.svelte'
	import LogoutButton from '$ui/_button/LogoutButton/LogoutButton.svelte'
</script>

<MenuPanel>
	{#each userMenu as userMenuItem}
		<UserMenuPanelItem {userMenuItem} />
	{/each}
	<LogoutButton style={menuItem} />
</MenuPanel>
