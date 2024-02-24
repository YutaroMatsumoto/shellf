<script lang="ts" context="module">
  type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
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

	/**
	 * MEMO: 注意点
	 * - formFieldProxyのconstraintsは利用しない。
	 * - formFieldProxyのerrorsは、submitのたびに一度errorsがundefinedになるデメリットがある。
	 *   - それにより画面のかつくきが発生する。
	 */
	const { value, errors } = formFieldProxy(form, field)

	const errormessageId = `errormessage-${$$restProps.id}`
</script>

<div>
	<label for={$$restProps.id}>{label}</label>
	<span class={fieldStyle({ isError: !!$errors })}>
		<input
			name={field}
			type="datetime-local"
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

	label {
		font-size: 16px;
		font-weight: bold;
	}

	input {
		width: 100%;
		font-size: 16px;
		border: none;
		outline: none;
	}
</style>
