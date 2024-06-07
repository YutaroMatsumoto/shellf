<script lang="ts">
	import GroupList from '$model/group/GroupList/GroupList.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import AnchorButton from '$ui/_button/AnchorButton/AnchorButton.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ data: groups } = data.groups)
	$: createdByMeGroupNum = groups?.filter(({ is_admin }) => is_admin).length ?? 0

	$: prohibitCreateGroup = createdByMeGroupNum >= 2 ? '作成できるグループは２つまでです。' : ''
</script>

<AnchorButton pathKey="groupNew" title="グループ作成" disabledReason={prohibitCreateGroup} />

<Spacer />
{#if !groups || groups.length === 0}
	所属グループはありません。
{:else}
	<GroupList {groups} />
{/if}
