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
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'

	export let event: Event

	$: ({ title, description, img_url: src } = event)
</script>

<section class={sectionWrapper}>
	<section class={section}>
		<PageHeading {title} />
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
	<SectionBoxWithTitle title="イベントの説明" content={description} />
</section>
