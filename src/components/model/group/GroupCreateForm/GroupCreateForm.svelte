<script lang="ts">
	import { goto } from '$app/navigation'
	import { css } from 'styled-system/css'
	import type { GroupNewSchema } from '$repositories/group/schema'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import SecondaryButton from '$ui/_button/SecondaryButton/SecondaryButton.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import { buttonGroupArea } from '$ui/_button/button.style'
	import TextArea from '$ui/_form/TextArea/TextArea.svelte'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import FileInput from '$ui/_form/FileInput/FileInput.svelte'
	import ToggleInput from '$ui/_form/ToggleInput/ToggleInput.svelte'

	import type { SuperForm } from 'sveltekit-superforms'
	import { pathName } from '$lib/route'

	export let form: SuperForm<GroupNewSchema>

	const { delayed, enhance, errors } = form

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
	<FileInput name="img" label="画像" imgError={$errors.img} />
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
