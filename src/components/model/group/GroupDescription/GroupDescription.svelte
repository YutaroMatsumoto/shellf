<!-- グループ名の表示とフィールドの切り替えを担うコンポーネント -->
<script lang="ts">
	import type { GroupWithCreateUser } from '$models/group'
	import { superForm, type SuperValidated } from 'sveltekit-superforms'
	import type { GroupDescriptionSchema } from '$repositories/group/schema'
	import { createSnackbar } from '$globalStates/snackbar'
	import MarkdownEditor from '$ui/_form/MarkdownEditor/MarkdownEditor.svelte'
	import SectionBoxWithTitle from '$ui/SectionBoxWithTitle/SectionBoxWithTitle.svelte'
	import Markdown from '$ui/Markdown/Markdown.svelte'

	export let isEditMode: boolean
	export let id: GroupWithCreateUser['id']
	export let description: GroupWithCreateUser['description']
	export let groupDescriptionForm: SuperValidated<GroupDescriptionSchema>

	const form = superForm(groupDescriptionForm, {
		delayMs: 50,
		resetForm: false, // これを設定しないとsubmit時にformが初期値にリセットされる
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', 'グループの説明の更新に成功しました')
			}
		},
		onError: () => createSnackbar.addSnackbar('failure', 'グループの説明の更新に失敗しました')
	})

	const { isTainted, enhance, tainted } = form
</script>

{#if isEditMode}
	<form method="POST" action={`/group/${id}?/updateGroupDescription`} use:enhance>
		<MarkdownEditor
			{form}
			field="description"
			rows={9}
			{isEditMode}
			disabled={!isTainted($tainted?.description)}
		/>
	</form>
{:else}
	<SectionBoxWithTitle title="グループの説明">
		<Markdown md={description} />
	</SectionBoxWithTitle>
{/if}
