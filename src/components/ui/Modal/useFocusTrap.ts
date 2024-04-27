import type { ModalStatus } from '$globalStates/modal'
import { afterUpdate, onDestroy } from 'svelte'
import { tabbable } from 'tabbable'

export function useFocusTrap(
	ref: HTMLDivElement | null,
	modalStatus: ModalStatus,
	closeModal: () => void
): void {
	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			event.preventDefault()
			closeModal()
			return
		}
		if (event.key === 'Tab') {
			event.preventDefault()
			if (ref !== null) {
				event.shiftKey
				// Shift キーが押下されている場合は逆方向にフォーカスを移動する
				focusNextElement(ref, event.shiftKey)
			}
		}
	}

	afterUpdate(() => {
		if (modalStatus === 'hidden' || !ref) {
			return
		}
		// 元々handleKeydownを定義していた場所

		document.body.addEventListener('keydown', handleKeydown)
		return () => {
			document.body.removeEventListener('keydown', handleKeydown)
		}
	})

	onDestroy(() => {
		document.body.removeEventListener('keydown', handleKeydown)
	})
}

function focusNextElement(element: Element, reverse: boolean): void {
	const tabbables = tabbable(element)
	const currentIndex = tabbables.findIndex((el) => el === document.activeElement)

	if (currentIndex === -1) {
		tabbables[0]?.focus()
		return
	}

	const nextIndex = currentIndex + (reverse ? -1 : 1)

	if (nextIndex === -1) {
		// 前の要素が存在しない場合、最後の要素にフォーカスする
		tabbables[tabbables.length - 1]?.focus()
		return
	}

	if (nextIndex === tabbables.length) {
		// 次の要素が存在しない場合、最初の要素にフォーカスする
		tabbables[0]?.focus()
		return
	}

	const nextElement = tabbables[nextIndex]
	nextElement?.focus()
}
