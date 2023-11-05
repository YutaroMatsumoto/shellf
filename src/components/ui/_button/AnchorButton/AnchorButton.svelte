<!-- このコンポーネントは使用頻度少なめにする -->
<script lang="ts">
	import type { PathValues } from '$lib/route'
	import { primaryButton } from '$ui/_button/PrimaryButton/recipe'

	export let title: string
	export let href: PathValues | '#'
	export let size: 'sm' | 'lg' = 'sm'
</script>

<a class={primaryButton({ size })} {href}>{title}</a>
