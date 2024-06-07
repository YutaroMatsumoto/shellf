<!-- このコンポーネントの存在意義は改めて考える -->
<!-- route, もしくはsrc/components/ui/_layoutのみで呼び出し可能とする -->
<script>
	import { css } from 'styled-system/css'
	import TextLink from '$ui/TextLink/TextLink.svelte'
	import ContentWidthController from '../ContentWidthController/ContentWidthController.svelte'

	const content = css({
		display: 'flex',
		gap: '16px',
		flexDirection: 'column',
		alignItems: 'flex-start'
	})
</script>

<ContentWidthController>
	<div class={content}>
		<TextLink isBack text="前のページに戻る" />
		<slot />
	</div>
</ContentWidthController>
