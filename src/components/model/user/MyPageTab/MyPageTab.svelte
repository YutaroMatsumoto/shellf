<script lang="ts">
	import Tab from '$ui/Tab/Tab.svelte'
	import type { TabItemType } from '$ui/Tab/tab'

	const tabs: TabItemType[] = [
		{ href: '/my', title: '所属グループ', ariaControles: 'my-group' },
		{ href: '/my/event', title: '作成したイベント', ariaControles: 'my-event' }
		// { href: '/my/study', title: '参加予定', ariaControles: 'my-study' }
	]
</script>

<Tab {tabs} />
