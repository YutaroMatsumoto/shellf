<script lang="ts">
	import { css } from 'styled-system/css'
	import EditIcon from '$ui/icon/EditIcon.svelte'
	import DeleteIcon from '$ui/icon/DeleteIcon.svelte'

	export let iconType: 'edit' | 'delete'
	export let onClick: () => void

	export const iconWrapper = css({
		position: 'relative',
		marginLeft: 'auto',
		display: 'flex',
		alignItems: 'center'
	})

	export const iconButton = css({
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

<div class={iconWrapper}>
	<button class={iconButton} on:click={onClick}>
		{#if iconType === 'edit'}
			<EditIcon />
		{:else if iconType === 'delete'}
			<DeleteIcon />
		{/if}
	</button>
</div>
