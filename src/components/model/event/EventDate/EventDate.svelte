<script lang="ts">
	import dayjs from '$lib/dayjs'
	import { getEventStatus, type Event } from '$models/event'
	import { datetimeArea, sectionWrapper, start } from './eventDate.style'
	import EventStatusLabel from '$model/event/EventDate/EventStatusLabel/EventStatusLabel.svelte'

	export let startDatetime: Event['start_datetime']
	export let endDatetime: Event['end_datetime']

	// startDatetime, endDatetime の日付が同じなら、「YYYY/MM/DD HH:mm ~ HH:mm」
	// startDatetime, endDatetime の日付が異なるなら、「YYYY/MM/DD HH:mm ~ YYYY/MM/DD HH:mm」

	// 日時表示の表現を分岐させるための変数
	const isSameDay = dayjs(startDatetime).isSame(dayjs(endDatetime), 'day')

	const startDay = dayjs(startDatetime).format('YYYY/MM/DD（ddd）')
	const startTime = dayjs(startDatetime).format('HH:mm')
	const endDay = dayjs(endDatetime).format('YYYY/MM/DD（ddd）')
	const endTime = dayjs(endDatetime).format('HH:mm')

	const eventStatus = getEventStatus(startDatetime, endDatetime)
</script>

<section class={sectionWrapper}>
	<EventStatusLabel status={eventStatus} />

	<div class={datetimeArea}>
		{#if isSameDay}
			<p class={start}>
				{startDay}
			</p>
			<p>{startTime} 〜 {endTime}</p>
		{:else}
			<p class={start}>
				{startDay}{startTime}
			</p>
			<span>〜</span>
			<p>
				{endDay}{endTime}
			</p>
		{/if}
	</div>
</section>
