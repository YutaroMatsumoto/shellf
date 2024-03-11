<script lang="ts">
	import type { Event } from '$models/event'
	import {
		eventImg,
		noImg,
		imgWrapper,
		sectionWrapper,
		section
	} from '$model/event/EventDetail/eventDetail'
	import Divider from '$ui/Divider/Divider.svelte'
	import SubHeading from '$ui/_heading/SubHeading/SubHeading.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import EventDescription from '$model/event/EventDescription/EventDescription.svelte'

	export let event: Event

	$: ({ title, description, img_url: src } = event)
</script>

<section class={sectionWrapper}>
	<section class={section}>
		<SubHeading {title} />
		<Divider />
		<div class={imgWrapper}>
			{#if src}
				<img class={eventImg} {src} alt="event" />
			{:else}
				<p class={noImg}>画像がありません</p>
			{/if}
		</div>
	</section>

	<Spacer />

	<Spacer />
	<EventDescription {description} />
</section>
