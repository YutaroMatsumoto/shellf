<!-- このコンポーネントは使用頻度少なめにする -->
<script lang="ts">
	import type { PathName } from 'src/models/route'
	import { css } from 'styled-system/css'

	export let title: string
	export let href: PathName

	const styles = css({
		padding: '8px 16px',
		color: 'white',
		fontSize: '16px',
		fontWeight: 'bold',
		borderRadius: 'sm',
		bg: 'green.500',
		transition: 'background',
		_hover: { bg: 'green.600' }
	})
</script>

<a class={styles} {href}>{title}</a>
