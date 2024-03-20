<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import { superForm, formFieldProxy, dateProxy } from 'sveltekit-superforms/client'
	import type { SuperValidated } from 'sveltekit-superforms'
	import type { EventNewSchema } from '$repositories/event/schema'
	import { dateTimeArea, edndDateTimeArea, flexBox, formWrapper } from './eventCreateForm.style'
	import MarkdownEditor from '$ui/_form/MarkdownEditor/MarkdownEditor.svelte'
	import FileInput from '$ui/_form/FileInput/FileInput.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import SecondaryButton from '$ui/_button/SecondaryButton/SecondaryButton.svelte'
	import { generatePath } from '$lib/route'
	import { createSnackbar } from '$globalStates/snackbar'
	import { buttonGroupArea } from '$ui/_button/button.style'
	import type { PostgrestSingleResponse } from '@supabase/supabase-js'
	import type { GroupWithCreateUser } from '$models/group'
	import DatetimeInput from '$ui/_form/_date/DatetimeInput/DatetimeInput.svelte'

	export let data: SuperValidated<EventNewSchema>
	export let group: PostgrestSingleResponse<GroupWithCreateUser[]>

	const form = superForm(data, {
		delayMs: 50,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', 'イベントの登録に成功しました')
				return goto(generatePath('groupEventList', [$page.params.id]))
			}
		}
	})

	$: groupIsPrivate = !!group?.data?.[0].is_private
	const proxyStartDatetime = dateProxy(form, 'startDatetime', { format: 'datetime-local' })

	const { delayed, enhance, errors } = form
</script>

<!-- TODO: 他のやつ見たい時とかに一回画面離れて戻るみたいな需要があるかも -->
<form enctype="multipart/form-data" class={formWrapper} method="POST" use:enhance>
	<section>
		<div class={flexBox}>
			<div>
				<div class={dateTimeArea}>
					<DatetimeInput
						{form}
						field="startDatetime"
						label="開始日時"
						id="event-new-fieldid-start-date"
						isRequired
					/>
					<div class={edndDateTimeArea}>
						<DatetimeInput
							{form}
							field="endDatetime"
							label="終了日時"
							id="event-new-fieldid-start-date"
							isRequired
							min={$proxyStartDatetime}
						/>
					</div>
				</div>

				<!-- TODO: 開始日が入力されているかつ終了日が入力されていなければ、自動的に開始日と同じ値を入れる -->
			</div>

			<!-- <div class={timeToggleArea}>
				<ToggleInput
					{form}
					field="isCrossDays"
					label="日を跨ぐ"
					id="event-new-fieldid-has-end-date"
				/>
			</div> -->
			<!-- TODO: 何時間開催なのかを入力できるようにした方が良いのでは -->
		</div>
		<Spacer />
		<TextInput {form} field="title" label="タイトル" id="event-new-fieldid-title" isRequired />
		<Spacer />
		<MarkdownEditor
			{form}
			field="description"
			label="説明"
			name="description"
			fildId="event-new-fieldid-description"
			rows={9}
			isRequired
		/>
		<Spacer />
		<FileInput name="img" label="画像" imgError={$errors.img} />
		<input type="hidden" name="groupIsPrivate" bind:value={groupIsPrivate} />
	</section>
	<Spacer />

	<!-- MEMO: MVPではリリース対象外とする -->
	<!-- <ToggleInput {form} field="isPublic" label="公開する" id="event-new-fieldid-is-public" /> -->
	<Spacer />

	<div class={buttonGroupArea}>
		<SecondaryButton type="button" onClick={() => goto(generatePath('group', [$page.params.id]))}
			>戻る</SecondaryButton
		>
		<PrimaryButton type="submit" loading={$delayed} aria-busy={$delayed}>保存</PrimaryButton>
	</div>
</form>
