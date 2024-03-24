<script lang="ts">
	import type { PageData } from './$types'
	import GroupNewPage from '$page/my/group/new/GroupNewPage.svelte'

	export let data: PageData
</script>

<GroupNewPage data={data.form} />
