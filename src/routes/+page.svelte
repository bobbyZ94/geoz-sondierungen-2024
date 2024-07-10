<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import CardListLinkElement from '$lib/components/CardListLinkElement.svelte'
	import { MobilePhoneSolid, EnvelopeSolid, AngleDownOutline } from 'flowbite-svelte-icons'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="bg-primary-100 flex flex-col gap-10">
	<!-- Hero -->
	<div class="hero min-h-screen" style="background-image: url(/images/dph2.jpg);">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="flex max-w-md flex-col items-center gap-5">
				<h1 class="mb-5 text-4xl font-bold">Geotechnische Untersuchungen</h1>
				<h3 class="mb-2 text-2xl font-bold">Sondierungen</h3>
				<h3 class="mb-2 text-2xl font-bold">Probenahmen</h3>
				<h3 class="mb-2 text-2xl font-bold">Bohrbegleitende Kampfmittelortung</h3>
				<h3 class="mb-2 text-2xl font-bold">Einmessen</h3>
				<h3 class="mb-2 text-2xl font-bold">aus einer Hand.</h3>
				<button
					><a href="/#ueberuns"><AngleDownOutline class="mt-5 animate-bounce" size="xl" /></a
					></button
				>
			</div>
		</div>
	</div>

	<!-- About -->
	<div
		id="ueberuns"
		class="flex flex-col items-center justify-between lg:min-h-screen lg:flex-row-reverse"
	>
		<div class="p-5">
			<h3 class="mb-5 text-2xl font-bold">Über Uns</h3>
			<div class="prose">{@html data.was_machen_wir[0].text}</div>
		</div>
		<img src="/images/am_wasser.jpg" alt="am wasser" class="lg:w-[90%] lg:rounded lg:drop-shadow" />
	</div>

	<!-- Leistungen -->
	<div
		id="leistungen"
		class="flex flex-col items-center justify-between lg:min-h-screen lg:flex-row"
	>
		<div class="p-5">
			<h3 class="mb-5 text-2xl font-bold">Unsere Leistungen</h3>
			<ul class="list-outside list-disc pl-4">
				{#each data.leistungen as leistung}
					<CardListLinkElement slug={leistung.slug} linkText={leistung.title} />
				{/each}
			</ul>
		</div>
		<img src="/images/proben.jpg" alt="proben" class="lg:w-[90%] lg:rounded lg:drop-shadow" />
	</div>

	<!-- Projekte -->
	<div
		id="projekte"
		class="flex flex-col items-center justify-between lg:min-h-screen lg:flex-row-reverse"
	>
		<div class="p-5">
			<h3 class="mb-5 text-2xl font-bold">Wo sind wir im Einsatz?</h3>
			<div class="prose">
				{@html data.wo_sind_wir_im_einsatz[0].text}
			</div>
		</div>
		<img
			src="/images/umspannwerk.jpg"
			alt="umspannwerk"
			class="lg:w-[90%] lg:rounded lg:drop-shadow"
		/>
	</div>

	<!-- Kontakt -->
	<div id="kontakt" class="flex flex-col items-center justify-between lg:min-h-screen lg:flex-row">
		<div class="flex flex-col gap-5 p-5">
			<h3 class="mb-5 text-2xl font-bold">Kontakt</h3>
			<div class="prose">
				{@html data.kontakt[0].text}
			</div>
			<div class="flex flex-col items-center gap-3">
				<a href={`mailto:${data.kontakt[0].email}`} class="flex gap-4 text-lg"
					><EnvelopeSolid />{data.kontakt[0].email}</a
				>
				<a href={`tel:${data.kontakt[0].tel}`} class="flex gap-4 text-lg"
					><MobilePhoneSolid />{data.kontakt[0].tel}</a
				>
			</div>
			<div class="font-semibold">Postanschrift:</div>
			<div class="flex flex-col items-center">
				<div>{data.kontakt[0].name}</div>
				<div>{data.kontakt[0].strasse_und_hausnummer}</div>
				<div>{data.kontakt[0].ort_und_plz}</div>
			</div>
		</div>
		<img
			src="/images/chef2.jpg"
			alt="chef"
			class="h-[400px] w-[400px] lg:rounded-full lg:drop-shadow"
		/>
	</div>

	<!-- Zitat -->
	<div class="mb-96 mt-20">
		<div class="text-center text-lg italic lg:text-xl">
			"Zuverlässige Arbeit, präzise Messungen und zügige Ergebnisse. Das macht uns aus."
		</div>
		<div class="mt-3 text-center lg:mt-5 lg:text-lg">
			- Ihr Ansprechpartner, Dipl.-Ing. Adam Zioltkowski
		</div>
	</div>
</div>
