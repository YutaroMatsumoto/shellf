<script lang="ts">
	import GroupCreateForm from '$model/group/GroupCreateForm/GroupCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import FormOnlyPageLayout from '$ui/_layout/_variedLayout/FormOnlyPageLayout/FormOnlyPageLayout.svelte'
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { GroupNewSchema } from '$repositories/group/schema'

	export let data: SuperValidated<GroupNewSchema>
</script>

<FormOnlyPageLayout>
	<PageHeading title="グループを作成する" />
	<GroupCreateForm {data} />
</FormOnlyPageLayout>
