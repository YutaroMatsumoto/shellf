<script lang="ts">
	import type { TabItemType } from '$ui/Tab/tab'
	import { page } from '$app/stores'
	import { tabItem } from './recipe'

	export let tabItemInfo: TabItemType

	$: isSelectedTab = $page.route.id === tabItemInfo.href
</script>

<a
	class={tabItem({ isSelectedTab })}
	href={tabItemInfo.href}
	role="tab"
	aria-controls={tabItemInfo.ariaControles}
	aria-selected={isSelectedTab}
>
	{tabItemInfo.title}
</a>
