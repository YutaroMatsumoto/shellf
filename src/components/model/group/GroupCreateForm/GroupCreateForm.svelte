<script lang="ts">
	import { goto } from '$app/navigation'
	import { css } from 'styled-system/css'
	import type { GroupNewSchema } from '$repositories/group/schema'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import SecondaryButton from '$ui/_button/SecondaryButton/SecondaryButton.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import TextArea from '$ui/_form/TextArea/TextArea.svelte'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import FileInput from '$ui/_form/FileInput/FileInput.svelte'
	import ToggleInput from '$ui/_form/ToggleInput/ToggleInput.svelte'
	import { buttonGroupArea } from '$ui/_button/button.style'

	import type { SuperValidated } from 'sveltekit-superforms'
	import { superForm } from 'sveltekit-superforms/client'
	import { pathName } from '$lib/route'
	import { createSnackbar } from '$globalStates/snackbar'

	export let data: SuperValidated<GroupNewSchema>
	export let imgError: string | undefined = undefined

	const form = superForm(data, {
		delayMs: 50,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', 'グループの登録に成功しました')
				return goto(pathName.my)
			}
		},
		onError: () => createSnackbar.addSnackbar('failure', 'グループの登録に失敗しました')
	})
	const { delayed, enhance } = form

	const formWrapper = css({
		width: '100%',
		marginTop: '20px'
	})
</script>

<form enctype="multipart/form-data" class={formWrapper} method="POST" use:enhance>
	<TextInput {form} field="name" label="グループ名" id="group-new-fieldid-name" />
	<Spacer />
	<TextArea
		{form}
		field="description"
		label="グループの説明"
		name="description"
		fildId="group-new-fieldid-description"
		rows={9}
	/>
	<Spacer />
	<FileInput name="img" label="画像" {imgError} />
	<Spacer />
	<ToggleInput
		{form}
		field="isPrivate"
		label="プライベートグループとして登録"
		id="event-new-fieldid-is-public"
		defaultValue={true}
		checked
	/>
	<Spacer />
	<div class={buttonGroupArea}>
		<SecondaryButton type="button" onClick={() => goto(pathName.my)}>戻る</SecondaryButton>
		<PrimaryButton type="submit" loading={$delayed} aria-busy={$delayed}>保存</PrimaryButton>
	</div>
</form>
