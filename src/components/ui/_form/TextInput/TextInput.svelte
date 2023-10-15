<script lang="ts">
	import { css } from 'styled-system/css'

	export let name: string
	export let label: string
	export let fildId: string

	const fieldWrapper = css({
		display: 'inline-flex',
		padding: '4px',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm',
		_focusWithin: {
			borderColor: 'green.300'
		}
	})
</script>

<div>
	<label for={fildId}>{label}</label>
	<span class={fieldWrapper}>
		<input {name} id={fildId} type="text" />
	</span>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	label {
		font-size: 12px;
		font-weight: bold;
	}

	input {
		border: none;
		outline: none;
	}
</style>
