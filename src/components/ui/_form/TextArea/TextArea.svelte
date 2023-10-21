<script lang="ts">
	import { cva } from 'styled-system/css'
	import { field, fieldWrapper } from '$ui/_form//commonStyle'

	export let name: string
	export let label: string
	export let fildId: string

	/** marginTop */
	export let space: 0 | 20 = 0

	/** 初期行数 */
	export let rows: number = 5
</script>

<div class={fieldWrapper({ space })}>
	<label for={fildId}>{label}</label>
	<span class={field}>
		<textarea {name} id={fildId} {rows} />
	</span>
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
