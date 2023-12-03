<script lang="ts">
	import AnchorButton from '$ui/_button/AnchorButton/AnchorButton.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<AnchorButton href="/my/group/new" title="グループ作成" />
