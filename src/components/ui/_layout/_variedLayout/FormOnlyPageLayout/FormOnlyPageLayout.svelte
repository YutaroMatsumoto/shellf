<script lang="ts">
	import { css } from 'styled-system/css'

	const wrapper = css({
		height: '100%',
		padding: '24px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	})

	const content = css({
		width: '64%',
		minWidth: '580px',
		padding: '24px',
		backgroundColor: 'white',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm'
	})
</script>

<div class={wrapper}>
	<div class={content}><slot /></div>
</div>
