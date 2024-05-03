<script lang="ts">
	import { css } from 'styled-system/css'

	export let size: number = 24

	const wrapper = css({
		display: 'flex'
	})
</script>

<!-- <div class={wrapper}>
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 14 14">
		<path
			fill="gray"
			fill-rule="evenodd"
			d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14M5.5 9.375a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25h-.875V6.5A.625.625 0 0 0 7 5.875H6a.625.625 0 1 0 0 1.25h.375v2.25zM8 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
			clip-rule="evenodd"
		/>
	</svg>
</div> -->

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
	<path
		fill="gray"
		d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5zm-1 5v2h2v-2zm0 4v8h2v-8z"
	/>
</svg>
