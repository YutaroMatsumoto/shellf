<script lang="ts">
	import { EventLabel, type EventLabelKey } from '$models/event'
	import { cva } from 'styled-system/css'

	export let status: EventLabelKey

	const eventLabel = cva({
		base: {
			width: '72px',
			borderRadius: 'sm',
			padding: '2px',
			color: 'white',
			fontWeight: 'bold',
			textAlign: 'center'
		},
		variants: {
			status: {
				future: { backgroundColor: 'green.400' },
				today: { backgroundColor: 'orange.400' }
			}
		}
	})
</script>

<div class={eventLabel({ status })}>
	<span>{EventLabel[status]}</span>
</div>
