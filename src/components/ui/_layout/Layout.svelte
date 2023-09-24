<script lang="ts">
	import Header from '$ui/_layout/Header/Header.svelte'
	import Footer from '$ui/_layout/Footer/Footer.svelte'
	import { css } from 'styled-system/css'
	import { createModal } from '$globalStates/modal'
	import Modal from '$ui/Modal/Modal.svelte'

	const wrapperStyles = css({
		display: 'grid',
		gridTemplateRows: '58px 1fr auto',
		height: '100vh'
	})

	const mainStyles = css({
		gridRow: 2,
		bg: 'gray.50'
	})

	const modal = createModal
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
