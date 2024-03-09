<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import FormLabel from '$ui/_form/FormLabel/FormLabel.svelte'

	import { fieldStyle } from '$ui/_form/commonStyle'
	import ErrorMessage from '$ui/_form/ErrorMessage/ErrorMessage.svelte'

	import { 
    formFieldProxy,		
    type SuperForm, 
    type FormPathLeaves 
  } from 'sveltekit-superforms';

	// 基本的なhtml属性はrestPropsで受け取るようにする
	export let form: SuperForm<T>
	export let field: FormPathLeaves<T>
	export let label: string
	export let isRequired: boolean = false

	/**
	 * MEMO: 注意点
	 * - formFieldProxyのconstraintsは利用しない。
	 * - formFieldProxyのerrorsは、submitのたびに一度errorsがundefinedになるデメリットがある。
	 *   - それにより画面のかつくきが発生する。
	 */
	const { value, errors } = formFieldProxy(form, field)

	const fieldId = `field-id-${$$restProps.id}`
	const errormessageId = `errormessage-${$$restProps.id}`
</script>

<div>
  <FormLabel {fieldId} {label} {isRequired} />
	<span class={fieldStyle({ isError: !!$errors })}>
		<input
			name={field}
			type="date"
			bind:value={$value}
			aria-invalid={$errors ? 'true' : undefined}
			aria-errormessage={errormessageId}
			{...$$restProps}
		/>
	</span>
	{#if $errors}
		<ErrorMessage id={errormessageId}>{$errors}</ErrorMessage>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}


	input {
		width: 100%;
		font-size: 16px;
		border: none;
		outline: none;
	}
</style>
