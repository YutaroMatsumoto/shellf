<!-- このコンポーネントは例外としてstyleについての関心はもたない -->
<script lang="ts">
	import { getSupabase } from '$globalStates/supabase'
	import { handleSignOut } from '$repositories/auth/repository'

	export let style: string
	export let onClose: (() => void) | undefined = undefined

	const supabase = getSupabase()

	const onClick = () => {
		onClose && onClose()
		handleSignOut($supabase)
	}
</script>

<button on:click={onClick} class={style}>ログアウト</button>

<style>
	button {
		cursor: pointer;
	}
</style>
