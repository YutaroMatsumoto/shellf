<script lang="ts">
	import GroupCreateForm from '$model/group/GroupCreateForm/GroupCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import { css } from 'styled-system/css'

	export let data
	export let form

	const wrapper = css({
		width: '50%',
		padding: '32px',
		backgroundColor: 'white',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm'
	})
</script>

<div class={wrapper}>
	<PageHeading title="グループを作成する" />
	<GroupCreateForm data={data.form} imgError={form?.imgError} />
</div>
