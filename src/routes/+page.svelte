<script lang="ts">
	import Hero from '$lib/components/Hero.svelte'
	import Quote from '$lib/components/Quote.svelte'
	import Kontakt from '$lib/components/Kontakt.svelte'
	import CardListLinkElement from '$lib/components/CardListLinkElement.svelte'

	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="bg-primary-100 flex flex-col items-center gap-10">
	<!-- Hero -->
	<Hero heroText={data.hero[0].text} />
	<!-- About -->
	<div
		id="ueberuns"
		class="scroll-mt-14 lg:grid lg:min-h-screen lg:scroll-mt-0 lg:grid-cols-3 lg:items-center"
	>
		<div class="p-5 lg:order-2 lg:col-span-1">
			<h3 class="mb-5 text-2xl font-bold">Über Uns</h3>
			<div class="prose">{@html data.was_machen_wir[0].text}</div>
		</div>
		<img
			src="/images/am_wasser.jpg"
			alt="am wasser"
			class="lg:order-1 lg:col-span-2 lg:rounded lg:drop-shadow"
		/>
	</div>

	<!-- Leistungen -->
	<div
		id="leistungen"
		class="scroll-mt-14 lg:grid lg:min-h-screen lg:scroll-mt-0 lg:grid-cols-3 lg:items-center"
	>
		<div class="p-5 lg:col-span-1">
			<h3 class="mb-5 text-2xl font-bold">Unsere Leistungen</h3>
			<ul class="list-outside list-disc pl-4">
				{#each data.leistungen as leistung}
					<CardListLinkElement slug={leistung.slug} linkText={leistung.title} />
				{/each}
			</ul>
		</div>
		<img src="/images/proben.jpg" alt="proben" class="lg:col-span-2 lg:rounded lg:drop-shadow" />
	</div>

	<!-- Projekte -->
	<div
		id="projekte"
		class="scroll-mt-14 lg:grid lg:min-h-screen lg:scroll-mt-0 lg:grid-cols-3 lg:items-center"
	>
		<div class="p-5 lg:order-2 lg:col-span-1">
			<h3 class="mb-5 text-2xl font-bold">Wo sind wir im Einsatz?</h3>
			<div class="prose">
				{@html data.wo_sind_wir_im_einsatz[0].text}
			</div>
		</div>
		<img
			src="/images/umspannwerk.jpg"
			alt="umspannwerk"
			class="lg:order-1 lg:col-span-2 lg:rounded lg:drop-shadow"
		/>
	</div>

	<!-- Kontakt -->
	<Kontakt kontakt={data.kontakt[0]} />

	<!-- Zitat -->
	<Quote quoteText={data.zitat[0].text} />
</div>
