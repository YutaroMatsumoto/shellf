<script>
	import { getSupabase } from '$globalStates/supabase'
	import { handleSignIn } from '$repositories/auth/repository'
	import GoogleIcon from '$ui/icon/GoogleIcon.svelte'
	import { css } from 'styled-system/css'

	/**
	 * styleはgoogleのガイドラインに従う
	 * https://developers.google.com/identity/branding-guidelines?hl=ja
	 */

	const loginButton = css({
		display: 'flex',
		alignItems: 'center',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm',
		shadow: 'md',
		padding: '8px',
		cursor: 'pointer',
		_hover: { bg: 'green.50' }
	})

	const buttonText = css({
		marginLeft: '24px',
		fontFamily: 'Roboto'
	})

	const supabase = getSupabase()
</script>

<button class={loginButton} on:click={() => handleSignIn($supabase)}>
	<GoogleIcon />
	<span class={buttonText}>Googleでログイン </span>
</button>
