<script lang="ts" context="module">
  type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { fieldStyle } from '$ui/_form/commonStyle'
	import ErrorMessage from '$ui/_form/ErrorMessage/ErrorMessage.svelte'
	import FormLabel from '$ui/_form/FormLabel/FormLabel.svelte'

	import { 
    formFieldProxy, 
    type SuperForm, 
    type FormPathLeaves, 
		dateProxy
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
	const { errors } = formFieldProxy(form, field)

	const fieldId = `field-id-${$$restProps.id}`
	const errormessageId = `errormessage-${$$restProps.id}`
	const proxyDate = dateProxy(form, field, { format: 'datetime-local' });

</script>

<div>
  <FormLabel {fieldId} {label} {isRequired} />
	<span class={fieldStyle({ isError: !!$errors })}>
		<input
			name={field}
			type="datetime-local"
			bind:value={$proxyDate}
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
