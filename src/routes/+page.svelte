<script>
	import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'
	import { css } from 'styled-system/css'
</script>

<ContentWidthController>
	<div
		class={css({
			fontSize: '2xl',
			fontWeight: 'bold'
		})}
	>
		Hello 🐼!
	</div>
</ContentWidthController>
