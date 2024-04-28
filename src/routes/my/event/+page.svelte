<script lang="ts">
	import EventList from '$model/event/EventList/EventList.svelte'
	import type { PageData } from './$types'
	import Pagination from '$ui/Pagination/Pagination.svelte'

	export let data: PageData

	$: ({ events } = data)

	$: total = data.events.count ?? 0
	$: currentPage = Number(data.currentPage) ?? 1
</script>

{#if !events.data || events.count === 0}
	作成したイベントはありません。
{:else}
	<EventList events={events.data} />
{/if}
{#if events?.data && events.data.length > 0}
	<Pagination pathKey="myEventList" {total} {currentPage} />
{/if}
