<script lang="ts">
	import { page } from '$app/stores'
	import { generatePath } from '$lib/route'
	import dayjs from '$lib/dayjs'
	import type { Event } from '$models/event'
	import { article, eventImage, item, noImage, timeAndLabel } from './eventItem.style'
	import EventLabel from '$model/event/EventLabel/EventLabel.svelte'

	export let id: string
	export let title: string
	export let startDatetime: Event['start_datetime']
	export let endDatetime: Event['end_datetime']
	export let src: Event['img_url']

	$: eventPageUrl = generatePath('eventDetail', [$page.params.id, id])

	const start = new Date(startDatetime)

	$: isToday = dayjs(startDatetime).isToday() || dayjs(endDatetime).isToday()
	$: isAfter = dayjs(startDatetime).isAfter()

	$: formatdate = dayjs(startDatetime).format('YYYY/MM/DD（ddd）HH:mm~')
</script>

<li>
	<a href={eventPageUrl}>
		<article class={article}>
			{#if src}
				<img class={eventImage} {src} alt="event" />
			{:else}
				<p class={noImage}>画像がありません</p>
			{/if}
			<div class={item}>
				<div class={timeAndLabel}>
					{#if isToday || isAfter}
						<EventLabel status={isToday ? 'today' : 'future'} />
					{/if}
					<span>
						<!-- TODO: 終了日表示させる -->
						{formatdate}
					</span>
				</div>

				<h2>{title}</h2>
			</div>
		</article>
	</a>
</li>

<style>
	h2 {
		font-size: 16px;
		font-weight: bold;
	}
</style>
