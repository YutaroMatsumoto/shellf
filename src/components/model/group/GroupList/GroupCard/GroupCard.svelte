<script lang="ts">
	import { generatePath } from '$lib/route'
	import {
		card,
		cardLink,
		img,
		noImg,
		adminMark
	} from '$model/group/GroupList/GroupCard/groupCard.style'

	export let id: string
	export let name: string
	export let imgSrc: string = ''
	export let isAdmin: boolean = false

	$: groupPageUrl = generatePath('group', [id])
</script>

<li>
	<article class={card}>
		{#if isAdmin}
			<p class={adminMark}>管理者</p>
		{/if}
		<a class={cardLink} href={groupPageUrl}>
			{#if imgSrc}
				<img class={img} src={imgSrc} alt="group img" />
			{:else}
				<div class={noImg} />
			{/if}
			<h2>{name}</h2>
		</a>
	</article>
</li>

<style>
	h2 {
		padding: 5px 8px; /** NOTE: やりたくないが、y軸を5pxにしないとと3行目が途切れて表示されてしまう */
		height: 48px;
		line-height: 20px;
		font-weight: 500;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: normal;
	}
</style>
