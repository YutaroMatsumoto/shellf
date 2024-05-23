<!-- MEMO: formではない。画面における状態を切り替えるためのトグル。 -->
<script lang="ts">
	import {
		circle,
		fieldWrapper,
		input,
		toggleArea,
		toggleWrapper
	} from './editModeSwitchToggle.style'

	export let label: string = '編集モード'
	export let isEditMode: boolean = false
	export let editModeSwitch: () => void
</script>

<div class={fieldWrapper}>
	<!-- MEMO: labelの領域をクリックして値が変わって欲しくないのでspanタグを利用 -->
	<span>{label}</span>
	<div class={toggleWrapper}>
		<div class={toggleArea({ checked: isEditMode })}>
			<div class={circle({ checked: isEditMode })} />
		</div>
		<button class={input} on:click={editModeSwitch} />
	</div>
</div>

<style>
	div {
		display: flex;
	}

	span {
		font-size: 16px;
		font-weight: bold;
	}
</style>
