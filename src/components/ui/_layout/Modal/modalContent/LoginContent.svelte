<script>
	import LoginButton from '$ui/_button/LoginButton/LoginButton.svelte'
	import { css } from 'styled-system/css'

	const buttonWrapper = css({
		padding: '16px',
		display: 'flex',
		justifyContent: 'center'
	})
</script>

<div class={buttonWrapper}>
	<LoginButton />
</div>
<span>利用規約、プライバシーポリシー（準備中）に同意した上でログインしてください。</span>
