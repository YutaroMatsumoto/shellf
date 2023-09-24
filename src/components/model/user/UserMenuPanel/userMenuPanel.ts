import { css } from 'styled-system/css'

export type MenuItem = ItemLink
type ItemLink = { href: string; title: string }

export const userMenu: MenuItem[] = [{ href: '#', title: 'マイページ' }]

/**
 * style
 */
export const menuItem = css({
	display: 'flex',
	width: '100%',
	padding: '8px',
	_hover: { bg: 'gray.50' }
})
