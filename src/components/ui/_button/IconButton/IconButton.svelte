<script lang="ts">
	import { css } from 'styled-system/css'
	import EditIcon from '$ui/icon/EditIcon.svelte'
	import DeleteIcon from '$ui/icon/DeleteIcon.svelte'
	import SaveIcon from '$ui/icon/SaveIcon.svelte'

	export let iconType: 'edit' | 'delete' | 'save'
	export let onClick: () => void

	const iconButton = css({
		width: '32px',
		height: '32px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 'sm',
		cursor: 'pointer',
		_hover: {
			backgroundColor: 'gray.100'
		}
	})
</script>

<button class={iconButton} on:click={onClick}>
	{#if iconType === 'edit'}
		<EditIcon />
	{:else if iconType === 'save'}
		<SaveIcon />
	{:else if iconType === 'delete'}
		<DeleteIcon />
	{/if}
</button>
