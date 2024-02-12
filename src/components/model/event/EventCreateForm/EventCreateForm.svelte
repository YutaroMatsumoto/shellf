<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import { superForm, formFieldProxy } from 'sveltekit-superforms/client'
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { EventNewSchema } from '$repositories/event/schema'
	import TextArea from '$ui/_form/TextArea/TextArea.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import { dateTimeArea, flexBox, formWrapper, timeToggleArea } from './eventCreateForm.style'
	import DateInput from '$ui/_form/_date/DateInput/DateInput.svelte'
	import TimeInput from '$ui/_form/_date/TimeInput/TimeInput.svelte'
	import ToggleInput from '$ui/_form/ToggleInput/ToggleInput.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import SecondaryButton from '$ui/_button/SecondaryButton/SecondaryButton.svelte'
	import { generatePath } from '$lib/route'
	import { createSnackbar } from '$globalStates/snackbar'
	import { buttonGroupArea } from '$ui/_button/button.style'
	import type { PostgrestSingleResponse } from '@supabase/supabase-js'
	import type { GroupWithCreateUser } from 'src/models/group'

	export let data: SuperValidated<EventNewSchema>
	export let group: PostgrestSingleResponse<GroupWithCreateUser[]>

	const form = superForm(data, {
		delayMs: 50,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', 'イベントの登録に成功しました')
				return goto(generatePath('group', $page.params.id))
			}
		}
	})

	const { value: hasTiemValue } = formFieldProxy(form, 'hasTime')
	const { value: hasEndDateValue } = formFieldProxy(form, 'hasEndDate')
	$: groupIsPrivate = !!group?.data?.[0].is_private

	const { delayed, enhance } = form
</script>

<form class={formWrapper} method="POST" use:enhance>
	<section>
		<div class={flexBox}>
			<div>
				<div class={dateTimeArea}>
					<DateInput {form} field="startDate" label="開催日" id="event-new-fieldid-start-date" />
					{#if $hasTiemValue}
						<TimeInput {form} field="startTime" label="時間" id="event-new-fieldid-start-time" />
					{/if}
				</div>

				<!-- TODO: 開始日が入力されているかつ終了日が入力されていなければ、自動的に開始日と同じ値を入れる -->
				{#if $hasEndDateValue}
					<Spacer />
					<div class={dateTimeArea}>
						<DateInput {form} field="endDate" label="終了日" id="event-new-fieldid-start-date" />
						{#if $hasTiemValue}
							<TimeInput {form} field="endTime" label="時間" id="event-new-fieldid-start-time" />
						{/if}
					</div>
				{/if}
			</div>

			<div class={timeToggleArea}>
				<ToggleInput {form} field="hasTime" label="時間表示" id="event-new-fieldid-has-time" />
				<ToggleInput
					{form}
					field="hasEndDate"
					label="終了日時表示"
					id="event-new-fieldid-has-end-date"
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
		<input type="hidden" name="groupIsPrivate" bind:value={groupIsPrivate} />
	</section>
	<Spacer />

	<!-- MEMO: MVPではリリース対象外とする -->
	<!-- <ToggleInput {form} field="isPublic" label="公開する" id="event-new-fieldid-is-public" /> -->
	<Spacer />

	<div class={buttonGroupArea}>
		<SecondaryButton type="button" onClick={() => goto(generatePath('group', $page.params.id))}
			>戻る</SecondaryButton
		>
		<PrimaryButton type="submit" loading={$delayed} aria-busy={$delayed}>保存</PrimaryButton>
	</div>
</form>
