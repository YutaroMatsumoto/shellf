<script lang="ts">
	import MyGroupListPage from '$page/my/MyGroupListPage.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ data: groups } = data.groups)
</script>

<MyGroupListPage groups={groups ?? []} />
