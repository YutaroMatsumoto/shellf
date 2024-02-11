<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import { superForm } from 'sveltekit-superforms/client'
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { EventNewSchema } from '$repositories/event/schema'
	import TextArea from '$ui/_form/TextArea/TextArea.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import { buttonSection, flexBox, formWrapper, smallFieldWrapper } from './eventCreateForm.style'
	import DatetimeInput from '$ui/_form/DatetimeInput/DatetimeInput.svelte'
	import ToggleInput from '$ui/_form/ToggleInput/ToggleInput.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import SecondaryButton from '$ui/_button/SecondaryButton/SecondaryButton.svelte'
	import { generatePath } from '$lib/route'

	export let data: SuperValidated<EventNewSchema>

	const form = superForm(data)

	const { delayed, enhance } = form
</script>

<form class={formWrapper} method="POST" use:enhance>
	<section>
		<div class={flexBox}>
			<div class={smallFieldWrapper}>
				<DatetimeInput
					{form}
					field="startDatetime"
					label="開催日時"
					id="event-new-fieldid-start-datetime"
				/>
			</div>
		</div>
		<Spacer />
		<TextInput {form} field="title" label="イベント名" id="event-new-fieldid-title" />
		<Spacer />
		<TextArea
			{form}
			field="description"
			label="イベントの説明"
			name="description"
			fildId="event-new-fieldid-description"
			rows={9}
		/>
	</section>
	<Spacer />

	<ToggleInput {form} field="isPublic" label="公開する" id="event-new-fieldid-is-public" />
	<Spacer />

	<section class={buttonSection}>
		<SecondaryButton type="button" onClick={() => goto(generatePath('group', $page.params.id))}
			>戻る</SecondaryButton
		>
		<PrimaryButton type="submit" loading={$delayed} aria-busy={$delayed}>保存</PrimaryButton>
	</section>
</form>
