import type { Database } from 'src/database'

export type Groups = Database['public']['Functions']['get_belong_group']['Returns']

export type Group = Groups[number]
