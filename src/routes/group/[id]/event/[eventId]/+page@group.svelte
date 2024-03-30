<script lang="ts">
	import EventDate from '$model/event/EventDate/EventDate.svelte'
	import EventDetail from '$model/event/EventDetail/EventDetail.svelte'
	import EventHostGroup from '$model/event/EventHostGroup/EventHostGroup.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import SimpleExceptionalLayout from '$ui/_layout/_variedLayout/SimpleExceptionalLayout/SimpleExceptionalLayout.svelte'
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ group, event } = data)

	$: groupData = group?.data?.[0]
	$: eventData = event?.data?.[0]
	$: console.log({ data, groupData, eventData })
</script>

<SimpleExceptionalLayout>
	{#if eventData}
		<section>
			<EventDetail event={eventData} />

			<div>
				<EventDate startDatetime={eventData.start_datetime} endDatetime={eventData.end_datetime} />
				<Spacer />
				<EventHostGroup name={groupData?.name ?? ''} src={groupData?.img_url ?? ''} />
			</div>
		</section>
	{:else}
		イベント情報を取得できませんでした。
	{/if}
</SimpleExceptionalLayout>

<style>
	section {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 20px;
	}
	div {
		width: 280px;
	}
</style>
