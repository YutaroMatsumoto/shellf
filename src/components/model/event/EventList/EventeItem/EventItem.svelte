<script lang="ts">
	import { page } from '$app/stores'
	import { goto } from '$app/navigation'
	import { generatePath } from '$lib/route'
	import dayjs from '$lib/dayjs'
	import { getEventStatus, type Event } from '$models/event'
	import {
		article,
		eventImage,
		iconWrapper,
		item,
		link,
		noImage,
		timeAndLabel
	} from './eventItem.style'
	import EventLabel from '$model/event/EventLabel/EventLabel.svelte'
	import { getUser } from '$globalStates/user'
	import { createSnackbar } from '$globalStates/snackbar'
	import IconButton from '$ui/_button/IconButton/IconButton.svelte'
	import H3 from '$ui/_heading/H3/H3.svelte'
	import type { TooltipPosition } from '$ui/TooltipIcon/tooltipIcon'

	export let id: string
	export let title: string
	export let startDatetime: Event['start_datetime']
	export let endDatetime: Event['end_datetime']
	export let src: Event['img_url']
	export let createdBy: Event['created_by']

	let loading: boolean = false

	const user = getUser()

	$: eventPageUrl = generatePath('eventDetail', [$page.params.id, id])

	$: eventStatus = getEventStatus(startDatetime, endDatetime)

	$: formatdate = dayjs(startDatetime).format('YYYY/MM/DD（ddd）HH:mm~')

	const deleteEvent = async () => {
		if (!window.confirm('本当に削除しますか？')) {
			return
		}
		loading = true
		await fetch(`/api/event/delete/${id}`, { method: 'DELETE' })
			.then((response) => {
				console.log({ response })
				response.ok && createSnackbar.addSnackbar('success', 'グループの削除に成功しました')
				/**
				 * MEMO: 現在のページに飛ぶことで、最新のデータを取得し直す。
				 * supabaseのrealtime機能を使うと別の方法を実現できるかも？
				 * 1ページに戻ってしまうという課題はある。
				 * */
				/**
				 * TODO: イベント削除をしてもページが更新されない時がある
				 * - イベント作成ページで作成→一覧にリダイレクトされる→削除→更新される
				 * - イベント作成ページで作成→一覧にリダイレクトされる→リロード→削除→更新されない
				 */
				goto($page.url.pathname)
			})
			.catch(() => createSnackbar.addSnackbar('failure', 'グループの削除に失敗しました'))
			.finally(() => (loading = false))
	}
</script>

<li>
	<article class={article}>
		{#if src}
			<img class={eventImage} {src} alt="event" />
		{:else}
			<p class={noImage}>画像がありません</p>
		{/if}
		<div class={item}>
			<div class={timeAndLabel}>
				{#if eventStatus !== 'past'}
					<EventLabel status={eventStatus} />
				{/if}
				<span>
					<!-- TODO: 終了日表示させる -->
					{formatdate}
				</span>
			</div>

			<a class={link} href={eventPageUrl}>
				<H3 {title} />
			</a>
		</div>
		{#if $user?.id && $user?.id === createdBy}
			<div class={iconWrapper}>
				<IconButton
					iconType="edit"
					onClick={() => console.log('edit')}
					message="イベントを編集"
					position="lowerLeft"
				/>
				<IconButton
					iconType="delete"
					onClick={deleteEvent}
					message="イベントを削除"
					position="lowerLeft"
				/>
			</div>
		{/if}
	</article>
</li>
