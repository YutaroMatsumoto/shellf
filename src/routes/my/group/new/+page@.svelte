<script lang="ts">
	import { goto } from '$app/navigation'

	import GroupCreateForm from '$model/group/GroupCreateForm/GroupCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import FormOnlyPageLayout from '$ui/_layout/_variedLayout/FormOnlyPageLayout/FormOnlyPageLayout.svelte'
	import type { PageData } from './$types'
	import { superForm } from 'sveltekit-superforms/client'
	import { pathName } from '$lib/route'
	import { createSnackbar } from '$globalStates/snackbar'

	export let data: PageData

	const form = superForm(data.form, {
		delayMs: 50,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', 'グループの登録に成功しました')
				return goto(pathName.my)
			}
		},
		onError: () => createSnackbar.addSnackbar('failure', 'グループの登録に失敗しました')
	})
</script>

<FormOnlyPageLayout>
	<PageHeading title="グループを作成する" />
	<GroupCreateForm {form} />
</FormOnlyPageLayout>
