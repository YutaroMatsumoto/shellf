<script lang="ts">
	import { field } from '$ui/_form/commonStyle'

	export let name: string
	export let label: string
	export let fildId: string
</script>

<div>
	<label for={fildId}>{label}</label>
	<span class={field}>
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
