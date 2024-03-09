<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { fieldWrapper, input, inputWrapper } from './timeInput.style'

	import { fieldStyle } from '$ui/_form/commonStyle'
	import FormLabel from "$ui/_form/FormLabel/FormLabel.svelte"
	import ErrorMessage from '$ui/_form/ErrorMessage/ErrorMessage.svelte'
	import Spacer from '$ui/Spacer/Spacer.svelte'

	import { 
    formFieldProxy, 
    type SuperForm, 
    type FormPathLeaves 
  } from 'sveltekit-superforms';

	// 基本的なhtml属性はrestPropsで受け取るようにする
	export let form: SuperForm<T>
	export let field: FormPathLeaves<T>
	export let label: string = ""
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

<div class={fieldWrapper}>
	{#if label}
  <FormLabel {fieldId} {label} {isRequired} />
	{:else}
	<Spacer space={24} />
	{/if}
	<div class={inputWrapper}>
		<span class={fieldStyle({ isError: !!$errors })}>
			<input
				class={input}
				name={field}
				type="time"
				bind:value={$value}
				aria-invalid={$errors ? 'true' : undefined}
				aria-errormessage={errormessageId}
				{...$$restProps}
			/>
		</span>
	</div>
	{#if $errors}
		<ErrorMessage id={errormessageId}>{$errors}</ErrorMessage>
	{/if}
</div>
