<script lang="ts">
	import { css } from 'styled-system/css'
	import MyPageTab from '$model/user/MyPageTab/MyPageTab.svelte'
	import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'
	import ContentColorController from '$ui/_layout/_variedLayout/ContentColorController/ContentColorController.svelte'
	const contentWrapper = css({
		height: 'calc(100% - 38px)'
	})
</script>

<ContentColorController>
	<ContentWidthController havePadding={false}>
		<MyPageTab />
	</ContentWidthController>
</ContentColorController>

<ContentWidthController>
	<div class={contentWrapper}>
		<slot />
	</div>
</ContentWidthController>
