<script lang="ts">
	import { generatePath, type PathName } from '$lib/route'
	import { currentPageStype, paginationStyle, paginationWrapper } from './pagination.style'

	export let total: number
	export let currentPage: number
	export let pathKey: PathName
	export let params: string | string[] | undefined = undefined

	// ±1ページだけ表示する
	const PAGE_RANGE = 1

	function* range(start: number, end: number) {
		for (let i = start; i <= end; i++) {
			yield i
		}
	}

	// 最初からわかるのは、今のページとtotal
	// paginationで表示するのは
	// startは1より小さくならなければ良い
	// endはtotalpageより大きくならなければ良い

	$: totalPageNum = Math.ceil(total / 10)
	$: formatParams = typeof params === 'string' ? [params] : params
	$: href = generatePath(pathKey, formatParams)

	$: paginationStart = currentPage > 1 ? currentPage - PAGE_RANGE : currentPage

	$: paginationEnd = currentPage >= totalPageNum ? totalPageNum : currentPage + PAGE_RANGE
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
