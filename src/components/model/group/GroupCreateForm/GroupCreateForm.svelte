<script lang="ts">
	import type { GroupNewSchema } from '$repositories/group/schema'
	import Loading from '$ui/Loading/Loading.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'
	import PrimaryButton from '$ui/_button/PrimaryButton/PrimaryButton.svelte'
	import TextArea from '$ui/_form/TextArea/TextArea.svelte'
	import TextInput from '$ui/_form/TextInput/TextInput.svelte'
	import { css } from 'styled-system/css'

	import type { SuperValidated } from 'sveltekit-superforms'
	import { superForm } from 'sveltekit-superforms/client'

	export let data: SuperValidated<GroupNewSchema>

	const form = superForm(data, {
		// taintedMessage: false,
		onSubmit: () => (loading = true),
		onResult: () => (loading = false)
	})
	let loading = false

	const { submitting } = form

	const formWrapper = css({
		width: '100%',
		marginTop: '20px'
	})
</script>

<form class={formWrapper} method="POST" use:form.enhance>
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
	<div>
		<PrimaryButton
			type="submit"
			variant="primary"
			onClick={() => console.log('保存')}
			loading={$submitting}
			aria-busy={$submitting}
		>
			保存
		</PrimaryButton>
	</div>
</form>

<style>
	div {
		width: 100%;
		text-align: center;
	}
</style>
