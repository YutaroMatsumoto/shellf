<!-- グループ名の表示とフィールドの切り替えを担うコンポーネント -->
<script lang="ts">
	import { css } from 'styled-system/css'
	import type { GroupWithCreateUser } from '$models/group'
	import IconButton from '$ui/_button/IconButton/IconButton.svelte'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import { superForm, type SuperValidated } from 'sveltekit-superforms'
	import type { GroupNameShema } from '$repositories/group/schema'
	import { createSnackbar } from '$globalStates/snackbar'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'

	export let isEditMode: boolean
	export let id: GroupWithCreateUser['id']
	export let name: GroupWithCreateUser['name']
	export let groupNameForm: SuperValidated<GroupNameShema>

	const form = superForm(groupNameForm, {
		delayMs: 50,
		resetForm: false, // これを設定しないとsubmit時にformが初期値にリセットされる
		onResult: ({ result }) => {
			if (result.type === 'success') {
				createSnackbar.addSnackbar('success', 'グループ名の更新に成功しました')
			}
		},
		onError: () => createSnackbar.addSnackbar('failure', 'グループ名の更新に失敗しました')
	})

	const { isTainted, enhance, tainted } = form

	const groupNameWrapper = css({
		display: 'flex',
		width: '280px'
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

<div class={groupNameWrapper}>
	{#if isEditMode}
		<form class={formWrapper} method="POST" action={`/group/${id}?/updateGroupName`} use:enhance>
			<div class={textInputWarpper}>
				<TextInput {form} field="name" id="group-update-fieldid-name" />
			</div>
			<IconButton
				type="submit"
				iconType="save"
				message="保存"
				disabled={!isTainted($tainted?.name)}
			/>
		</form>
	{:else}
		<PageHeading title={name} />
	{/if}
</div>
