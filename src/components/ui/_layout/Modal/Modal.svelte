<!-- 背景色を暗くし、ユーザーの注意を集中させるコンポーネント -->

<script lang="ts">
	import { createModal, type Modal } from '$globalStates/modal'
	import { content, overlay } from '$ui/_layout/Modal/modal.style'
	import LoginContent from '$ui/_layout/Modal/modalContent/LoginContent.svelte'
	import { useFocusTrap } from '$ui/_layout/Modal/useFocusTrap'

	// export let modalType: Modal
	let ref: HTMLDivElement | null = null
	// let ariaLabelledby: string
	let ariaDescribedby: string

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
		{/if}
	</div>
</div>

<!-- 以下属性は現状不要なので取り除く -->
<!-- aria-labelledby={$modal}
		aria-describedby={ariaDescribedby} -->
