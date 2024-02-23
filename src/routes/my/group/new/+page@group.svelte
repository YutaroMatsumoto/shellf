<script lang="ts">
	import GroupCreateForm from '$model/group/GroupCreateForm/GroupCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import FormOnlyPageLayout from '$ui/_layout/_variedLayout/FormOnlyPageLayout/FormOnlyPageLayout.svelte'
	import type { ActionData, PageData } from './$types'

	export let data: PageData
	export let form: ActionData
</script>

<FormOnlyPageLayout>
	<PageHeading title="グループを作成する" />
	<GroupCreateForm data={data.form} imgError={form?.imgError} />
</FormOnlyPageLayout>
