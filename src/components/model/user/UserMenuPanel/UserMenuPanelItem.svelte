<script lang="ts">
	import { menuItem, type MenuItem } from '$model/user/UserMenuPanel/userMenuPanel'

	export let userMenuItem: MenuItem
</script>

<a class={menuItem} href={userMenuItem.href}>
	{userMenuItem.title}
</a>
