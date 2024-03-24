<script lang="ts">
	import type { GroupWithCreateUser } from '$models/group'

	import Markdown from '$ui/Markdown/Markdown.svelte'
	import { descriptionSection, sectionWrapper, title } from './eventDescription'

	export let description: GroupWithCreateUser['description'] | null
</script>

<section class={sectionWrapper}>
	<h3 class={title}>イベントの説明</h3>
	<div class={descriptionSection}>
		<Markdown md={description ?? ''} />
	</div>
</section>
