<script lang="ts">
	import { css } from 'styled-system/css'
	import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'

	const wrapper = css({
		height: '100%',
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

<ContentWidthController>
	<div class={wrapper}>
		<div class={content}><slot /></div>
	</div>
</ContentWidthController>
