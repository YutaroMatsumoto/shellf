<script lang="ts">
	import EventCreateForm from '$model/event/EventCreateForm/EventCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import FormOnlyPageLayout from '$ui/_layout/_variedLayout/FormOnlyPageLayout/FormOnlyPageLayout.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<FormOnlyPageLayout>
	<PageHeading title="イベントを作成する" textAlignCenter />
	<EventCreateForm data={data.form} group={data.group} />
</FormOnlyPageLayout>
