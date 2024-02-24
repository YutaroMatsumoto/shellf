<script lang="ts" context="module">
	type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import {
		circle,
		fieldWrapper,
		input,
		toggleArea,
		toggleWrapper
	} from '$ui/_form/ToggleInput/toggleInput.style'

	import type { Writable } from 'svelte/store'

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

	$: boolValue = value as Writable<boolean>
</script>

<!-- エラーメッセージは不要 -->
<div class={fieldWrapper}>
	<!-- MEMO: labelの領域をクリックして値が変わって欲しくないのでspanタグを利用 -->
	<span>{label}</span>
	<div class={toggleWrapper}>
		<div class={toggleArea({ checked: $boolValue })}>
			<div class={circle({ checked: $boolValue })} />
		</div>
		<input
			class={input}
			id={$$restProps.id}
			name={field}
			type="checkbox"
			bind:checked={$boolValue}
			aria-invalid={$errors ? 'true' : undefined}
			aria-errormessage={errormessageId}
			{...$$restProps}
		/>
	</div>
</div>

<style>
	div {
		display: flex;
	}

	span {
		font-size: 16px;
		font-weight: bold;
	}
</style>
