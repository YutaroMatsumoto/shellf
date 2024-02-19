<script lang="ts">
	import { css } from 'styled-system/css'
	import { EventLabel, type EventLabelKey } from '$models/event'

	export let status: EventLabelKey

	const eventLabel = css({
		borderRadius: 'sm',
		padding: '4px',
		backgroundColor: status === 'future' ? 'green.400' : 'orange.400',
		color: 'white',
		fontWeight: 'bold'
	})
</script>

<div>
	<span class={eventLabel}>{EventLabel[status]}</span>
</div>
