<!-- このコンポーネントは使用頻度少なめにする -->
<script lang="ts">
	import type { PathName, PathValues } from '$lib/route'
	import { pathName, generatePath } from '$lib/route'
	import { primaryButton } from '$ui/_button/PrimaryButton/recipe'

	export let title: string
	export let pathKey: PathName
	export let params: string | undefined = undefined
	export let size: 'sm' | 'lg' = 'sm'

	$: href = generatePath(pathKey, params)
</script>

<a class={primaryButton({ size })} {href}>{title}</a>
