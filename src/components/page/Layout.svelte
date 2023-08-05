<script>
	import Header from '$ui/Header/Header.svelte'
	import Footer from '$ui/Footer/Footer.svelte'
	import { css } from 'styled-system/css'

	const wrapperStyles = css({
		display: 'grid',
		gridTemplateRows: '50px 1fr auto',
		height: '100vh'
	})

	const mainStyles = css({
		gridRow: 2,
		padding: ' 20px'
	})
</script>

<div class={wrapperStyles}>
	<Header />
	<main class={mainStyles}>
		<slot />
	</main>
	<Footer />
</div>
