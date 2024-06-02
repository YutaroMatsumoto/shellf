<script lang="ts">
	import { css } from 'styled-system/css'
	import EventDate from '$model/event/EventDate/EventDate.svelte'
	import EventDetail from '$model/event/EventDetail/EventDetail.svelte'
	import EventHostGroup from '$model/event/EventHostGroup/EventHostGroup.svelte'
	import EditModeSwitchToggle from '$ui/EditModeSwitchToggle/EditModeSwitchToggle.svelte'
	import SimpleExceptionalLayout from '$ui/_layout/_variedLayout/SimpleExceptionalLayout/SimpleExceptionalLayout.svelte'
	import type { PageData } from './$types'
	import { getUser } from '$globalStates/user'
	import EventDeleteButton from '$model/event/EventDeleteButton/EventDeleteButton.svelte'

	export let data: PageData

	const user = getUser()
	const section = css({
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		gap: '40px'
	})
	const sideContent = css({
		width: '280px',
		display: 'flex',
		flexDirection: 'column',
		gap: '20px'
	})
	const editModeToggleWrapper = css({
		marginLeft: 'auto'
	})

	let isEditMode = false
	const editModeSwitch = () => {
		isEditMode = !isEditMode
	}

	$: ({ group, event, eventTitleForm, eventDescriptionForm } = data)

	$: groupData = group?.data?.[0]
	$: eventData = event?.[0]
</script>

<SimpleExceptionalLayout>
	{#if eventData}
		<section class={section}>
			<EventDetail {isEditMode} event={eventData} {eventTitleForm} {eventDescriptionForm} />
			<div class={sideContent}>
				{#if $user?.id && $user?.id === groupData?.created_by}
					<div class={editModeToggleWrapper}>
						<EditModeSwitchToggle {isEditMode} {editModeSwitch} />
						{#if isEditMode}
							<EventDeleteButton />
						{/if}
					</div>
				{/if}
				<EventDate startDatetime={eventData.start_datetime} endDatetime={eventData.end_datetime} />
				<EventHostGroup name={groupData?.name ?? ''} src={groupData?.img_url ?? ''} />
			</div>
		</section>
	{:else}
		イベント情報を取得できませんでした。
	{/if}
</SimpleExceptionalLayout>
