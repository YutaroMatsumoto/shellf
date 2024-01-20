<script lang="ts">
	import type { TabItemType } from '$ui/Tab/tab'
	import { page } from '$app/stores'
	import { tabItem } from './recipe'

	export let tabItemInfo: TabItemType

	$: ({ id, href, title, ariaControles } = tabItemInfo)
	$: tabId = id ?? href
	$: isSelectedTab = $page.route.id === tabId
</script>

<a
	class={tabItem({ isSelectedTab })}
	{href}
	role="tab"
	aria-controls={ariaControles}
	aria-selected={isSelectedTab}
>
	{title}
</a>
