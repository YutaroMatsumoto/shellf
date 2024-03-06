<script lang="ts">
	import './github-markdown.css'
	import { markdownWrapper } from './markdown.style'
	import { Markdown as ExMarkdown } from 'svelte-exmarkdown'
	import { gfmPlugin } from 'svelte-exmarkdown/gfm'
	const plugins = [gfmPlugin()]

	export let isPreview = false
	export let md: string
</script>

<div class={`${markdownWrapper({ isPreview })} markdown-body`}>
	<ExMarkdown {md} {plugins} />
</div>
