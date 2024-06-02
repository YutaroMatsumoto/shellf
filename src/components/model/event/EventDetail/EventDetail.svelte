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
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import SectionBoxWithTitle from '$ui/SectionBoxWithTitle/SectionBoxWithTitle.svelte'
	import Markdown from '$ui/Markdown/Markdown.svelte'
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { EventTitleShema, EventDescriptionSchema } from '$repositories/event/schema'
	import EventName from './EventName/EventName.svelte'

	export let isEditMode: boolean
	export let event: Event
	export let eventTitleForm: SuperValidated<EventTitleShema>
	export let eventDescriptionForm: SuperValidated<EventDescriptionSchema>

	$: console.log({ eventTitleForm, eventDescriptionForm })
	$: ({ title, description, img_url: src } = event)
</script>

<section class={sectionWrapper}>
	<section class={section}>
		<EventName {isEditMode} {title} {eventTitleForm} />
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

	<SectionBoxWithTitle title="イベントの説明">
		<Markdown md={description ?? ''} />
	</SectionBoxWithTitle>
</section>
