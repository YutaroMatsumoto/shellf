import type { Database } from 'src/database'

export type Event = Database['public']['Tables']['event']['Row']
export const EventLabel = {
	future: '開催前',
	today: '本日開催'
} as const

export type EventLabelKey = keyof typeof EventLabel
