import type { TabItemType } from '$ui/Tab/tab'

/** 動的ルーティングなので、変数ではなく関数でtabを返すようにする */
export function getTabs(id: string): TabItemType[] {
	return [
		{ id: '/group/[id]', href: `/group/${id}`, title: 'ホーム', ariaControles: 'group-home' },
		{
			id: '/group/[id]/event',
			href: `/group/${id}/event`,
			title: 'イベント',
			ariaControles: 'group-events'
		},
		{
			id: '/group/[id]/member',
			href: `/group/${id}/member`,
			title: 'メンバー',
			ariaControles: 'group-member'
		}
	]
}
