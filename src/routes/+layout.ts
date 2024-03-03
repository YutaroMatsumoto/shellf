/** private moduleはserver側でのみimoprt可能とのこと。工夫が必要となる。 */
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import type { Database } from 'src/database'
import type { LayoutLoad } from './$types'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	// urlに対する依存？
	depends('supabase:auth')

	// クライアント用のsupabase instanceを作成
	const supabase = createSupabaseLoadClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		// dataは、+layout.server.tsでreturnされた値
		serverSession: data.session
	})

	const {
		data: { session }
	} = await supabase.auth.getSession()

	/**
	 * MEMO: ここは最適な実装ではないと考えている。
	 * 本来は、sessionの有無を見てuserDataの取得をするのが正しいと思う（今の実装もそうなってはいるが）。
	 * だが、sessionの値の有無でif文で分岐を実装すると、
	 * ifブロックの外からは取得したuserDataにアクセスできなくなってしまう。
	 */
	const user = await supabase.from('user').select('*').eq('id', session?.user.id)

	return { supabase, session, userData: user?.data?.[0] ?? null }
}
