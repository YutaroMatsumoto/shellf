// See https://kit.svelte.dev/docs/types#app

import type { SupabaseClient, Session } from '@supabase/supabase-js'
import type { Database } from 'src/database'

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Locals {
			supabase: SupabaseClient<Database>
			getSession(): Promise<Session | null>
		}
		interface PageData {
			session: Session | null
		}
	}
}

export {}
