<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<svelte:head>
	<title>GeoZ - {data.title}</title>
	<meta
		name="description"
		content="Geotechnische Untersuchungen, Sondierungen, Probenahme, Bohrbegleitende Kampfmittelortung und Einmessen aus einer Hand."
	/>
</svelte:head>

<div class="flex flex-col items-center p-5">
	<div class="my-5 text-2xl font-semibold">{data.title}</div>
	<div class="prose">{@html data.text}</div>
</div>
