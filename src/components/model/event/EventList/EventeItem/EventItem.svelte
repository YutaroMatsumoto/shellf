<script lang="ts">
	import { page } from '$app/stores'
	import { generatePath } from '$lib/route'
	import dayjs from '$lib/dayjs'
	import { item, timeAndLabel } from './eventItem.style'
	import EventLabel from '$model/event/EventLabel/EventLabel.svelte'

	export let id: string
	export let title: string
	export let startDatetime: string
	export let hasTime: boolean

	$: eventPageUrl = generatePath('eventDetail', [$page.params.id, id])

	const start = new Date(startDatetime)

	$: isToday = dayjs(startDatetime).isToday()
	$: isAfter = dayjs(startDatetime).isAfter()

	$: formatdate = hasTime
		? dayjs(startDatetime).format('YYYY/MM/DD（ddd）HH:mm~')
		: dayjs(startDatetime).format('YYYY/MM/DD（ddd）')
</script>

<li>
	<a href={eventPageUrl}>
		<article class={item}>
			<div class={timeAndLabel}>
				{#if isToday || isAfter}
					<EventLabel status={isToday ? 'today' : 'future'} />
				{/if}
				<span>
					{formatdate}
				</span>
			</div>

			<h2>{title}</h2>
		</article>
	</a>
</li>

<style>
	h2 {
		font-size: 16px;
		font-weight: bold;
	}
</style>
