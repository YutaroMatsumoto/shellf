<script lang="ts">
	import EventCreateForm from '$model/event/EventCreateForm/EventCreateForm.svelte'
	import PageHeading from '$ui/_heading/PageHeading/PageHeading.svelte'
	import FormOnlyPageLayout from '$ui/_layout/_variedLayout/FormOnlyPageLayout/FormOnlyPageLayout.svelte'

	export let data
</script>

<FormOnlyPageLayout>
	<PageHeading title="イベントを作成する" />
	<EventCreateForm data={data.form} group={data.group} />
</FormOnlyPageLayout>
