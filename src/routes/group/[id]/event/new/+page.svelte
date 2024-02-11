<script lang="ts">
	import EventCreateForm from '$model/event/EventCreateForm/EventCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import { css } from 'styled-system/css'

	export let data

	const wrapper = css({
		width: '60%',
		padding: '32px',
		backgroundColor: 'white',
		borderWidth: '1px',
		borderColor: 'gray.300',
		borderRadius: 'sm'
	})
</script>

<div class={wrapper}>
	<PageHeading title="イベントを作成する" />
	<EventCreateForm data={data.form} />
</div>
