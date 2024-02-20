<script lang="ts">
	import { EventLabel, type EventLabelKey } from '$models/event'
	import { cva } from 'styled-system/css'

	export let status: EventLabelKey

	const eventLabel = cva({
		base: {
			borderRadius: 'sm',
			padding: '4px',
			color: 'white',
			fontWeight: 'bold'
		},
		variants: {
			status: {
				future: { backgroundColor: 'green.400' },
				today: { backgroundColor: 'orange.400' }
			}
		}
	})
</script>

<div>
	<span class={eventLabel({ status })}>{EventLabel[status]}</span>
</div>
