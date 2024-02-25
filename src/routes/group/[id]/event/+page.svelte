<script lang="ts">
	import { css } from 'styled-system/css'
	import EventList from '$model/event/EventList/EventList.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import AnchorButton from '$ui/_button/AnchorButton/AnchorButton.svelte'
	import type { PageData } from './$types'
	import Pagination from '$ui/Pagination/Pagination.svelte'

	export let data: PageData

	const wrapper = css({
		display: 'flex'
	})

	$: ({ group, events } = data)
	$: groupData = group.data?.[0]

	$: total = data.events.count ?? 0
	$: currentPage = Number(data.currentPage) ?? 1
</script>

<div class={wrapper}>
	<AnchorButton pathKey="eventNew" params={groupData?.id} title="イベント作成" />
</div>
<Spacer />
{#if !events.data || events.count === 0}
	開催予定のイベントはありません。
{:else}
	<EventList events={events.data} />
{/if}
{#if events?.data && events.data.length > 0}
	<Pagination pathKey="groupEventList" params={groupData?.id} {total} {currentPage} />
{/if}
