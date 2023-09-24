<!-- このコンポーネントは例外としてstyleについての関心はもたない -->
<script lang="ts">
	import { getSupabase } from '$globalStates/supabase'
	import { handleSignOut } from '$repositories/auth/repository'

	export let style: string
	const supabase = getSupabase()
</script>

<button data-sveltekit-reload on:click={() => handleSignOut($supabase)} class={style}>
	ログアウト
</button>

<style>
	button {
		cursor: pointer;
	}
</style>
