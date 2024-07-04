<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import { Modal } from 'flowbite-svelte'
	import { MobilePhoneSolid } from 'flowbite-svelte-icons'
	import { EnvelopeSolid } from 'flowbite-svelte-icons'

	// Leistungen modals
	let showLeistungenRammkernsondierungen = false
</script>

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
	<div class="flex flex-col gap-5">
		<div>
			Eine wesentliche Voraussetzung zur Lösung geotechnischer Aufgaben- und Problemstellungen ist
			die Kenntnis des Untergrundes. Hier kommen wir ins Spiel und sichern mit <span
				class="font-semibold">zuverlässigen Untersuchungen</span
			> ihr Projekt ab.
		</div>
		<div>
			Seit 2002 sind wir tätig in Sachen Geotechnik, Umweltgeotechnik und bohrbegleitende
			Kampfmittelfreiheit. Unsere langjährige <span class="font-semibold">Erfahrung</span>
			macht uns zum <span class="font-semibold">kompetenten</span> Partner für Ihre Projekte.
		</div>
	</div>
</Card>

<!-- Leistungen -->
<Card
	id="leistungen"
	title="Unsere Leistungen"
	showButtonLink={true}
	buttonLinkUrl="/#kontakt"
	buttonLinkText="Kontakt"
	imageUrl="/images/proben.jpg"
	reverseImg={false}
>
	<div class="flex flex-col gap-5">
		<ul class="list-outside list-disc pl-4">
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<li on:click={() => showLeistungenRammkernsondierungen === true}>
				Rammkernsondierungen und Rammsondierungen
			</li>
			<li></li>
		</ul>
	</div>
</Card>

<!-- Leistungen Modals -->
<Modal title="Terms of Service" bind:open={showLeistungenRammkernsondierungen} autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		With less than a month to go before the European Union enacts new consumer privacy laws for its
		citizens, companies around the world are updating their terms of service agreements to comply.
	</p>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25
		and is meant to ensure a common set of data rights in the European Union. It requires
		organizations to notify users as soon as possible of high-risk data breaches that could
		personally affect them.
	</p>
</Modal>

<!-- Projekte -->
<Card
	id="projekte"
	title="Wo sind wir im Einsatz?"
	showButtonLink={true}
	buttonLinkUrl="/#kontakt"
	buttonLinkText="Kontakt"
	imageUrl="/images/proben.jpg"
	reverseImg={false}
	>Eine wesentliche Voraussetzung zur Lösung geotechnischer Aufgaben- und Problemstellungen ist die
	Kenntnis des Untergrundes. Hier kommen wir ins Spiel und sichern mit zuverlässigen Untersuchungen
	ihr Projekt ab.</Card
>

<!-- Kontakt -->
<Card
	id="kontakt"
	title="Kontakt"
	showButtonLink={false}
	imageUrl="/images/proben.jpg"
	reverseImg={false}
>
	<div class="flex w-full flex-col gap-5">
		<div>
			Wenn Sie ein Angebot wünschen oder Fragen zu unseren Leistungen haben, können Sie uns gerne
			<span class="font-semibold">telefonisch</span> oder per
			<span class="font-semibold">E-Mail</span> kontaktieren:
		</div>
		<div class="flex flex-col items-center gap-3">
			<a href="mailto:info@geoz-sondierungen.de" class="flex gap-2"
				><EnvelopeSolid />info@geoz-sondierungen.de</a
			>
			<a href="tel:+491726763159" class="flex gap-2"><MobilePhoneSolid />+49 (0) 172 - 67 63 159</a>
		</div>
		<div class="font-semibold">Postanschrift:</div>
		<div class="flex flex-col items-center">
			<div>GeoZ. Dipl.-Ing. Adam Zioltkowski</div>
			<div>Lu-Röder-Straße 13</div>
			<div>64331 Weiterstadt / Braunshardt</div>
		</div>
	</div>
</Card>
