import { goto } from '$app/navigation'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from 'src/database'

export const handleSignIn = async (supabase: SupabaseClient<Database>) => {
	await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: { queryParams: { access_type: 'offline', prompt: 'consent' } }
	})
}

export const handleSignOut = async (supabase: SupabaseClient<Database>) => {
	await supabase.auth.signOut()
	window.location.reload()
}
