<script lang="ts">
	import ErrorMessage from '$ui/_form/ErrorMessage/ErrorMessage.svelte'

	/**
	 * NOTE: propsに関して
	 * fileはfieldがimg.name, img.size のようになってしまう。
	 * そのため、TextInputなどのfieldのようにformやfieldを受け取る実装は難しい.
	 * そのため、nameやerrors等のformに関する状態を直接受け渡すようにする。
	 * superformsとしてもfileのfieldは未対応なので対応を待つ
	 */
	// export let form: SuperForm<ZodValidation<T>, unknown>
	export let name: string
	export let label: string
	export let imgError: string | undefined

	const errormessageId = `errormessage-${$$restProps.id}`
</script>

<div>
	<label for={$$restProps.id}>{label}</label>
	<input
		id={$$restProps.id}
		type="file"
		accept="image/*"
		{name}
		aria-invalid={imgError ? 'true' : undefined}
		aria-errormessage={errormessageId}
		{...$$restProps}
	/>
	{#if imgError}
		<ErrorMessage id={errormessageId}>{imgError}</ErrorMessage>
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
</style>
