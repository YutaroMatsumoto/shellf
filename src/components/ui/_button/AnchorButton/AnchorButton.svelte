<!-- このコンポーネントは使用頻度少なめにする -->
<script lang="ts">
	import { button } from '$ui/_button/recipe'
	import type { PathValues } from 'src/models/route'

	export let title: string
	export let href: PathValues | '#'
	export let size: 'sm' | 'lg' = 'sm'
</script>

<a class={button({ size, type: 'primary' })} {href}>{title}</a>
