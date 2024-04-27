<script lang="ts">
	import { page } from '$app/stores'
	import { generatePath } from '$lib/route'
	import dayjs from '$lib/dayjs'
	import { getEventStatus, type Event } from '$models/event'
	import {
		article,
		eventImage,
		item,
		noImage,
		timeAndLabel,
		iconWrapper,
		iconButton
	} from './eventItem.style'
	import EventLabel from '$model/event/EventLabel/EventLabel.svelte'
	import DeleteIcon from '$ui/icon/DeleteIcon.svelte'
	import { createModal } from '$globalStates/modal'

	export let id: string
	export let title: string
	export let startDatetime: Event['start_datetime']
	export let endDatetime: Event['end_datetime']
	export let src: Event['img_url']

	const modal = createModal

	$: eventPageUrl = generatePath('eventDetail', [$page.params.id, id])

	$: eventStatus = getEventStatus(startDatetime, endDatetime)

	$: formatdate = dayjs(startDatetime).format('YYYY/MM/DD（ddd）HH:mm~')
</script>

<li>
	<article class={article}>
		{#if src}
			<img class={eventImage} {src} alt="event" />
		{:else}
			<p class={noImage}>画像がありません</p>
		{/if}
		<div class={item}>
			<div class={timeAndLabel}>
				{#if eventStatus !== 'past'}
					<EventLabel status={eventStatus} />
				{/if}
				<span>
					<!-- TODO: 終了日表示させる -->
					{formatdate}
				</span>
			</div>

			<a href={eventPageUrl}>
				<h2>{title}</h2>
			</a>
		</div>
		<div class={iconWrapper}>
			<button class={iconButton} on:click={() => modal.deleteEvent(id)}>
				<DeleteIcon />
			</button>
		</div>
	</article>
</li>

<style>
	h2 {
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}
</style>
