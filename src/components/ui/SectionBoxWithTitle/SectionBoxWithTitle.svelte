<script lang="ts">
	import Markdown from '$ui/Markdown/Markdown.svelte'
	import { sectionWrapper, h2, contentSectionWrapper } from './sectionBoxWithTitle.style'

	export let title: string
	export let content: string | null
</script>

<section class={sectionWrapper}>
	<h2 class={h2}>{title}</h2>
	<section class={contentSectionWrapper}>
		<Markdown md={content ?? ''} />
	</section>
</section>
