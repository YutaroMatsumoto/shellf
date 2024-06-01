<script lang="ts">
	import MyPageTab from '$model/user/MyPageTab/MyPageTab.svelte'
	import ContentWidthController from '$ui/_layout/_variedLayout/ContentWidthController/ContentWidthController.svelte'
	import ContentColorController from '$ui/_layout/_variedLayout/ContentColorController/ContentColorController.svelte'
</script>

<ContentColorController>
	<ContentWidthController havePadding={false}>
		<MyPageTab />
	</ContentWidthController>
</ContentColorController>

<ContentWidthController>
	<div>
		<slot />
	</div>
</ContentWidthController>

<style>
	div {
		height: calc(100% - 38px);
	}
</style>
