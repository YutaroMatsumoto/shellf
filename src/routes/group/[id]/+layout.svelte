<script lang="ts">
	import type { LayoutData } from './$types'
	import GroupPageLayout from '$page/group/[id]/GroupPageLayout.svelte'

	export let data: LayoutData
	$: ({ data: group } = data.group)
	$: groupData = group?.[0]
</script>

<GroupPageLayout group={groupData}><slot /></GroupPageLayout>
