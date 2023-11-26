<script lang="ts">
	import Header from '$ui/_layout/Header/Header.svelte'
	import Footer from '$ui/_layout/Footer/Footer.svelte'
	import { mainStyles, snackbarContainer, wrapperStyles } from '$ui/_layout/Layout.style'

	import { createModal } from '$globalStates/modal'
	import Modal from '$ui/Modal/Modal.svelte'

	import { createSnackbar } from '$globalStates/snackbar'
	import Snackbar from '$ui/Snackbar/Snackbar.svelte'

	const modal = createModal
	const snackbars = createSnackbar
</script>

<div class={wrapperStyles}>
	<Header />
	<main class={mainStyles}>
		<slot />
	</main>
	<Footer />
</div>

{#if $modal !== 'hidden'}
	<Modal />
{/if}

<div class={snackbarContainer}>
	{#each $snackbars as snackbar (snackbar.id)}
		<Snackbar status={snackbar.status} message={snackbar.message} />
	{/each}
</div>
