<script lang="ts">
	import EventCreateForm from '$model/event/EventCreateForm/EventCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import { css } from 'styled-system/css'

	export let data

	const wrapper = css({
		height: '100%',
		padding: '24px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	})

	const content = css({
		width: '60%',
		padding: '32px',
		backgroundColor: 'white',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm'
	})
</script>

<div class={wrapper}>
	<div class={content}>
		<PageHeading title="イベントを作成する" />
		<EventCreateForm data={data.form} group={data.group} />
	</div>
</div>
