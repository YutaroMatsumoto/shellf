<script lang="ts">
	import Layout from '$ui/_layout/Layout.svelte'
	import '../app.css'

	/** start supabase */
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import type { LayoutData } from './$types'
	import { setUser } from '$globalStates/user'
	import { setSupabase } from '$globalStates/supabase'
	import { setSession } from '$globalStates/session'

	// ここのdataは、おそらく+layout.tsのload関数の返り値
	export let data: LayoutData

	$: ({ supabase, session, userData } = data)

	// loadしたものは+layout内でcontextに入れた方が良いと判断
	$: setUser(userData)
	$: setSupabase(supabase)
	$: setSession(session)

	// コンポーネントがマウントされた時に実行される
	onMount(() => {
		// MEMO: onMountの中じゃないとsession等の値はundefinedになる。
		console.log({ data, supabase, session })

		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})
		// アンマウント時に実行
		return () => subscription.unsubscribe()
	})
	/** end supabase */
</script>

<Layout>
	<slot />
</Layout>
