<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<svelte:head>
	<title>GeoZ - Datenschutz</title>
	<meta
		name="description"
		content="Geotechnische Untersuchungen, Sondierungen, Probenahme, Bohrbegleitende Kampfmittelortung und Einmessen aus einer Hand."
	/>
</svelte:head>

<div class="prose p-5">{@html data.datenschutz[0].text}</div>
