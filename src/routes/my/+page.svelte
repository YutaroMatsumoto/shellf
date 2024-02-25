<script lang="ts">
	import type { PageData } from './$types'
	import MyGroupListPage from '$page/my/MyGroupListPage.svelte'

	export let data: PageData

	$: ({ data: groups } = data.groups)
</script>

<MyGroupListPage groups={groups ?? []} />
