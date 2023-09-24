<script lang="ts">
	import { menuItem, userMenu } from '$model/user/UserMenuPanel/userMenuPanel'
	import MenuPanel from '$ui/MenuPanel/MenuPanel.svelte'
	import LogoutButton from '$ui/_button/LogoutButton/LogoutButton.svelte'
</script>

<MenuPanel>
	{#each userMenu as userMenuItem}
		<a class={menuItem} href={userMenuItem.href}>
			{userMenuItem.title}
		</a>
	{/each}
	<LogoutButton style={menuItem} />
</MenuPanel>
