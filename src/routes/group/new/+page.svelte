<script lang="ts">
	import GroupCreateForm from '$model/group/GroupCreateForm/GroupCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import { css } from 'styled-system/css'

	export let data

	const wrapper = css({
		backgroundColor: 'white',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm'
	})
</script>

<div class={wrapper}>
	<PageHeading title="グループを作成する" />
	<GroupCreateForm data={data.form} />
</div>

<style>
	div {
		width: 60%;
		height: 90%;
		padding: 20px;
	}
</style>
