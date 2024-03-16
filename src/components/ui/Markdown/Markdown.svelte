<script lang="ts">
	import './github-markdown.css'
	import { css } from 'styled-system/css'

	import { Markdown as ExMarkdown } from 'svelte-exmarkdown'
	import { gfmPlugin } from 'svelte-exmarkdown/gfm'

	const markdownWrapper = css({
		base: {
			width: '100%',
			minHeight: '220px'
		}
	})

	const plugins = [gfmPlugin()]

	export let md: string
</script>

<div class={`${markdownWrapper} markdown-body`}>
	<ExMarkdown {md} {plugins} />
</div>
