<!-- 背景色を暗くし、ユーザーの注意を集中させるコンポーネント -->

<script lang="ts">
	import { createModal } from '$globalStates/modal'
	import { content, overlay } from '$ui/Modal/modal.style'
	import DeleteGroup from '$ui/Modal/modalContent/DeleteGroup/DeleteGroup.svelte'
	import LoginContent from '$ui/Modal/modalContent/LoginContent.svelte'
	import { useFocusTrap } from '$ui/Modal/useFocusTrap'

	let ref: HTMLDivElement | null = null

	const modal = createModal

	$: useFocusTrap(ref, $modal, modal.close)
</script>

<div id="modal">
	<!-- MEMO: modalは例外的にwarningをignoreする -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div on:click={modal.close} class={overlay} />
	<div
		class={content}
		role="dialog"
		aria-modal="true"
		bind:this={ref}
		aria-describedby="modal-describe"
	>
		{#if $modal === 'login'}
			<LoginContent />
		{:else if $modal === 'deleteGroup'}
			<DeleteGroup />
		{/if}
	</div>
</div>

<!-- 以下属性は現状不要なので取り除く -->
<!-- aria-labelledby={$modal}
		aria-describedby={ariaDescribedby} -->
