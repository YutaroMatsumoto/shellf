<script>
	import MyPageTab from '$model/user/MyPageTab/MyPageTab.svelte'
</script>

<MyPageTab />
<div>
	<slot />
</div>

<style>
	div {
		/* 38pxはTabItemの高さ + TabItemのborder幅 */
		height: calc(100% - 38px);
		padding: 24px;
	}
</style>
