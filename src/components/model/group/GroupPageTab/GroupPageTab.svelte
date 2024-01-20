<script>
	import { page } from '$app/stores'
	import Tab from '$ui/Tab/Tab.svelte'
	import { getTabs } from './tab'

	$: tabs = getTabs($page.params.id)
</script>

<Tab {tabs} />
