<!-- このコンポーネントは使用頻度少なめにする -->
<script lang="ts">
	import { css } from 'styled-system/css'
	import type { PathName } from '$lib/route'
	import { generatePath } from '$lib/route'
	import { primaryButton } from '$ui/_button/PrimaryButton/recipe'
	import TooltipIcon from '$ui/TooltipIcon/TooltipIcon.svelte'

	export let title: string
	export let pathKey: PathName
	export let params: string | string[] | undefined = undefined
	export let size: 'sm' | 'lg' = 'sm'
	export let disabledReason: string = ''

	$: disabled = !!disabledReason

	$: formatParams = typeof params === 'string' ? [params] : params

	$: href = generatePath(pathKey, formatParams)

	const wrapper = css({
		display: 'flex',
		alignItems: 'center',
		gap: '4px',
		height: 'auto'
	})
</script>

<div class={wrapper}>
	<a class={primaryButton({ size, disabled })} {href}>{title}</a>
	{#if disabled}
		<TooltipIcon message={disabledReason} />
	{/if}
</div>
