<script lang="ts">
	import { env } from '$env/dynamic/public'
	import { PUBLIC_BACKEND_URL } from '$env/static/public'
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

<div class="mb-5 flex flex-col items-center p-5">
	<div class="my-5 text-2xl font-semibold">{data.title}</div>
	<div class="prose">{@html data.text}</div>
	<div class="">
		<div>
			{#if data.download}
				<div class="text-xl font-semibold">Dokumente zum Herunterladen:</div>
				{#each data.download as download}
					<a
						href={`${PUBLIC_BACKEND_URL}/api/files/${data.collectionId}/${data.id}/${download}`}
						download
						class="prose my-2 block rounded-md bg-gray-200 p-2">{download}</a
					>
				{/each}
			{/if}
		</div>
	</div>
</div>
