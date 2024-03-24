<script lang="ts">
	import GroupHomePage from '$page/group/[id]/GroupHomePage.svelte'
	import type { PageData } from './$types'

	export let data: PageData
	$: ({ data: group } = data.group)
	$: groupData = group?.[0]
</script>

<GroupHomePage group={groupData} />
