<!-- グループ名の表示とフィールドの切り替えを担うコンポーネント -->
<script lang="ts">
	import { page } from '$app/stores'
	import { superForm, type SuperValidated } from 'sveltekit-superforms'
	import { createSnackbar } from '$globalStates/snackbar'
	import MarkdownEditor from '$ui/_form/MarkdownEditor/MarkdownEditor.svelte'
	import SectionBoxWithTitle from '$ui/SectionBoxWithTitle/SectionBoxWithTitle.svelte'
	import Markdown from '$ui/Markdown/Markdown.svelte'
	import type { EventDescriptionSchema } from '$repositories/event/schema'
	import type { Event } from '$models/event'

	export let isEditMode: boolean
	export let description: Event['description']
	export let eventDescriptionForm: SuperValidated<EventDescriptionSchema>

	const form = superForm(eventDescriptionForm, {
		delayMs: 50,
		resetForm: false, // これを設定しないとsubmit時にformが初期値にリセットされる
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', '説明の更新に成功しました')
			}
		},
		onError: () => createSnackbar.addSnackbar('failure', '説明の更新に失敗しました')
	})

	const { isTainted, enhance, tainted } = form
</script>

{#if isEditMode}
	<form
		method="POST"
		action={`/group/${$page.params.id}/event/${$page.params.eventId}?/updateEventDescription`}
		use:enhance
	>
		<MarkdownEditor
			{form}
			field="description"
			rows={9}
			{isEditMode}
			disabled={!isTainted($tainted?.description)}
		/>
	</form>
{:else}
	<SectionBoxWithTitle title="イベントの説明">
		<Markdown md={description} />
	</SectionBoxWithTitle>
{/if}
