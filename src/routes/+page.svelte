<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import Hero from '$lib/components/Hero.svelte'
	import CardListLinkElement from '$lib/components/CardListLinkElement.svelte'
	import { MobilePhoneSolid, EnvelopeSolid } from 'flowbite-svelte-icons'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="bg-primary-100 flex flex-col gap-10">
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
	<div
		id="kontakt"
		class="scroll-mt-14 lg:grid lg:min-h-screen lg:scroll-mt-0 lg:grid-cols-3 lg:items-center"
	>
		<div class="flex flex-col gap-5 p-5 lg:col-span-2">
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
		<img src="/images/chef2.jpg" alt="chef" class="lg:rounded-full lg:drop-shadow" />
	</div>

	<!-- Zitat -->
	<div class="mb-60 mt-40 px-5">
		<div class="text-center text-lg italic lg:text-xl">
			"Zuverlässige Arbeit, präzise Messungen und zügige Ergebnisse. Das macht uns aus."
		</div>
		<div class="mt-5 text-center lg:text-lg">
			- Ihr Ansprechpartner, <br /> Dipl.-Ing. Adam Zioltkowski
		</div>
	</div>
</div>
