<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import CardListLinkElement from '$lib/components/CardListLinkElement.svelte'
	import { MobilePhoneSolid, EnvelopeSolid } from 'flowbite-svelte-icons'
	import type { PageData } from './$types'
	export let data: PageData
	console.log(data)
</script>

<div class="flex flex-col gap-10">
	<!-- About -->
	<Card
		id="ueberuns"
		title="Was machen wir?"
		showButtonLink={true}
		buttonLinkUrl="/#kontakt"
		buttonLinkText="Kontakt"
		imageUrl="/images/am_wasser.jpg"
		reverseImg={false}
	>
		<div class="prose">
			{@html data.was_machen_wir[0].text}
		</div>
	</Card>

	<!-- Leistungen -->
	<Card id="leistungen" title="Unsere Leistungen" imageUrl="/images/proben.jpg" reverseImg={false}>
		<ul class="mt-4 list-outside list-disc pl-4">
			{#each data.leistungen as leistung}
				<CardListLinkElement slug={leistung.slug} linkText={leistung.title} />
			{/each}
		</ul>
	</Card>

	<!-- Projekte -->
	<Card
		id="projekte"
		title="Wo sind wir im Einsatz?"
		imageUrl="/images/umspannwerk.jpg"
		reverseImg={false}
	>
		<div class="prose">
			{@html data.wo_sind_wir_im_einsatz[0].text}
		</div></Card
	>

	<!-- Kontakt -->
	<Card
		id="kontakt"
		title="Kontakt"
		showButtonLink={false}
		imageUrl="/images/wald.jpg"
		reverseImg={false}
		size="lg"
	>
		<div class="flex w-full flex-col gap-5">
			<div class="prose">
				{@html data.kontakt[0].text}
			</div>
			<div class="flex flex-col items-center gap-3">
				<a href={`mailto:${data.kontakt[0].email}`} class="flex gap-4"
					><EnvelopeSolid />{data.kontakt[0].email}</a
				>
				<a href={`tel:${data.kontakt[0].tel}`} class="flex gap-4"
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
	</Card>
</div>
