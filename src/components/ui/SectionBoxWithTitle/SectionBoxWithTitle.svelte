<script lang="ts">
	import { sectionWrapper, h2, contentSectionWrapper } from './sectionBoxWithTitle.style'

	export let title: string
</script>

<section class={sectionWrapper}>
	<h2 class={h2}>{title}</h2>
	<section class={contentSectionWrapper}>
		<slot />
	</section>
</section>
