<script lang="ts">
	import TabItem from '$ui/Tab/TabItem/TabItem.svelte'
	import type { TabItemType } from '$ui/Tab/tab'
	import { css } from 'styled-system/css'

	export let tabs: TabItemType[]

	const tabWrapper = css({
		display: 'flex',
		gap: '24px',
		width: '100%',
		paddingX: '24px',
		bg: 'white'
	})
</script>

<!-- aria-selectedを活用する -->
<div role="tablist" class={tabWrapper}>
	{#each tabs as tabItemInfo}
		<!-- svelte-ignore missing-declaration -->
		<TabItem {tabItemInfo} />
	{/each}
</div>
