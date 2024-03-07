<script lang="ts">
	import { css } from 'styled-system/css'

	export let fieldId: string
	export let label: string
	export let isRequired: boolean = false

	const requiredLabel = css({
		display: 'flex',
		alignItems: 'center',
		borderRadius: 'sm',
		padding: '2px 8px',
		color: 'white',
		fontSize: '12px',
		fontWeight: 'bold',
		backgroundColor: 'orange.400'
	})

	const labelWrapper = css({
		display: 'flex',
		gap: '8px'
	})
</script>

<div class={labelWrapper}>
	<label for={fieldId}>{label}</label>
	{#if isRequired}
		<div class={requiredLabel}>
			<span>必須</span>
		</div>
	{/if}
</div>

<style>
	label {
		font-size: 16px;
		font-weight: bold;
	}
</style>
