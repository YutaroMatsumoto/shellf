<script lang="ts" context="module">
	import type { AnyZodObject } from 'zod'
	type T = AnyZodObject
</script>

<script lang="ts" generics="T extends AnyZodObject">
	import ErrorMessage from '$ui/_form/ErrorMessage/ErrorMessage.svelte'
	import { fieldStyle } from '$ui/_form//commonStyle'

	import type { z } from 'zod'
	import type { ZodValidation, FormPathLeaves } from 'sveltekit-superforms'
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client'

	// 基本的なhtml属性はrestPropsで受け取るようにする
	export let form: SuperForm<ZodValidation<T>, unknown>
	export let field: FormPathLeaves<z.infer<T>>
	export let label: string

	/** 初期行数 */
	export let rows: number = 5
	const { value, errors } = formFieldProxy(form, field)

	const errormessageId = `errormessage-${$$restProps.id}`
</script>

<div>
	<label for={$$restProps.id}>{label}</label>
	<span class={fieldStyle({ isError: !!$errors })}>
		<textarea
			id={$$restProps.id}
			name={field}
			{rows}
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

	textarea {
		width: 100%;
		font-size: 16px;
		border: none;
		outline: none;
	}
</style>
