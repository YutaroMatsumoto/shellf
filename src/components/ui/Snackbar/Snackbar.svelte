<script lang="ts">
	import { css } from 'styled-system/css'
	import { createSnackbar, type Status } from '$globalStates/snackbar'
	import StatusCircle from '$ui/StatusCircle/StatusCircle.svelte'
	import { slide } from 'svelte/transition'

	export let status: Status
	export let message: string

	const snackbar = createSnackbar

	const snackbarStyle = css({
		display: 'flex',
		alignItems: 'center',
		width: '280px',
		height: '45px',
		padding: '12px',
		bg: 'white',
		shadow: 'lg',
		borderRadius: 'sm',
		fontSize: 'sm',
		marginBottom: '20px'
	})

	const snackbarMessage = css({
		width: '200px',
		height: '20px',
		overflow: 'hidden'
	})
</script>

<div class={snackbarStyle} transition:slide={{ duration: 300, axis: 'x' }}>
	<StatusCircle {status} />
	<span class={snackbarMessage}>
		{message}
	</span>
</div>
