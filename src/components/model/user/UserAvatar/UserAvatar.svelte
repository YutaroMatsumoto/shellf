<script lang="ts">
	export let src: string | null | undefined
</script>

<img {src} alt="profile icon" id="profile-icon" />

<style>
	img {
		height: 40px;
		border-radius: 3px;
	}
</style>
