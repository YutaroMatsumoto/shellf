<!-- イベント名の表示とフィールドの切り替えを担うコンポーネント -->
<script lang="ts">
	import { page } from '$app/stores'
	import { css } from 'styled-system/css'
	import type { Event } from '$models/event'
	import IconButton from '$ui/_button/IconButton/IconButton.svelte'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import { superForm, type SuperValidated } from 'sveltekit-superforms'
	import type { EventTitleShema } from '$repositories/event/schema'
	import { createSnackbar } from '$globalStates/snackbar'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'

	export let isEditMode: boolean
	export let title: Event['title']
	export let eventTitleForm: SuperValidated<EventTitleShema>

	const form = superForm(eventTitleForm, {
		delayMs: 50,
		resetForm: false, // これを設定しないとsubmit時にformが初期値にリセットされる
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', 'イベント名の更新に成功しました')
			}
		},
		onError: () => createSnackbar.addSnackbar('failure', 'イベント名の更新に失敗しました')
	})

	const { isTainted, enhance, tainted } = form

	const eventNameWrapper = css({
		display: 'flex'
	})

	const formWrapper = css({
		width: '100%',
		display: 'flex',
		gap: '4px'
	})

	const textInputWarpper = css({
		width: '100%'
	})
</script>

<div class={eventNameWrapper}>
	{#if isEditMode}
		<form
			class={formWrapper}
			method="POST"
			action={`/group/${$page.params.id}/event/${$page.params.eventId}?/updateEventName`}
			use:enhance
		>
			<div class={textInputWarpper}>
				<TextInput {form} field="title" id="event-update-fieldid-name" />
			</div>
			<IconButton
				type="submit"
				iconType="save"
				message="保存"
				disabled={!isTainted($tainted?.title)}
			/>
		</form>
	{:else}
		<PageHeading {title} />
	{/if}
</div>
