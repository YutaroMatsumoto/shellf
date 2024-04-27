<script lang="ts">
	import { menuItem, userMenu } from './evnetMenuPanel'
	import MenuPanel from '$ui/MenuPanel/MenuPanel.svelte'

	export let onClose: () => void
</script>

<MenuPanel top={'56px'} {onClose}>
	{#each userMenu as userMenuItem}
		<a class={menuItem} href={userMenuItem.href} on:click={onClose}>
			{userMenuItem.title}
		</a>
	{/each}
</MenuPanel>
