<script lang="ts">
	import { generatePath, type PathName } from '$lib/route'
	import { currentPageStype, paginationStyle, paginationWrapper } from './pagination.style'

	export let total: number
	export let currentPage: number
	export let pathKey: PathName
	export let params: string | string[] | undefined = undefined
	const PAGE_RANGE = 1

	function* range(start: number, end: number) {
		for (let i = start; i <= end; i++) {
			yield i
		}
	}

	$: totalPageNum = Math.ceil(total / 10)
	$: formatParams = typeof params === 'string' ? [params] : params
	$: href = generatePath(pathKey, formatParams)

	// TODO: startは直す必要ありそう（totalが3かつcurrentが3のときに2になる）
	$: paginationStart =
		currentPage >= totalPageNum
			? currentPage - PAGE_RANGE
			: currentPage - PAGE_RANGE < 1
			? 1
			: currentPage - PAGE_RANGE
	$: paginationEnd =
		currentPage >= totalPageNum
			? totalPageNum
			: currentPage - PAGE_RANGE < 1
			? 3
			: currentPage + PAGE_RANGE
</script>

<ul class={paginationWrapper}>
	{#each range(paginationStart, paginationEnd) as i (i)}
		<li>
			{#if currentPage === i}
				<span class={currentPageStype}>{i}</span>
			{:else}
				<a class={paginationStyle} href={`${href}?page=${i}`}>{i}</a>
			{/if}
		</li>
	{/each}
</ul>
