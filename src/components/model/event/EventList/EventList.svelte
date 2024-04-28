<script lang="ts">
	import EventItem from '$model/event/EventList/EventeItem/EventItem.svelte'
	import type { Event } from '$models/event'
	export let events: Event[]
</script>

<ul>
	{#each events as { id, title, start_datetime: startDatetime, end_datetime: endDatetime, img_url: src, created_by: createdBy } (id)}
		<EventItem {id} {title} {startDatetime} {endDatetime} {src} {createdBy} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
</style>
