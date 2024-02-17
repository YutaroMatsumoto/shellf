<!-- このコンポーネントは使用頻度少なめにする -->
<script lang="ts">
	import type { PathName } from '$lib/route'
	import { generatePath } from '$lib/route'
	import { primaryButton } from '$ui/_button/PrimaryButton/recipe'

	export let title: string
	export let pathKey: PathName
	export let params: string | string[] | undefined = undefined
	export let size: 'sm' | 'lg' = 'sm'

	$: formatParams = typeof params === 'string' ? [params] : params

	$: href = generatePath(pathKey, formatParams)
</script>

<a class={primaryButton({ size })} {href}>{title}</a>
