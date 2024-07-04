<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import { MobilePhoneSolid } from 'flowbite-svelte-icons'
	import { EnvelopeSolid } from 'flowbite-svelte-icons'
</script>

<!-- About -->
<Card
	id="about"
	title="Über Uns"
	showButtonLink={true}
	buttonLinkUrl="/#contact"
	buttonLinkText="Kontakt"
	imageUrl="proben.jpg"
	reverseImg={false}
	>Eine wesentliche Voraussetzung zur Lösung geotechnischer Aufgaben- und Problemstellungen ist die
	Kenntnis des Untergrundes. Hier kommen wir ins Spiel und sichern mit zuverlässigen Untersuchungen
	ihr Projekt ab.</Card
>

<!-- Contact -->
<Card id="contact" title="Kontakt" showButtonLink={false} imageUrl="proben.jpg" reverseImg={false}>
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
			<div>Lu-Röder-Strasse 13</div>
			<div>64331 Weiterstadt / Braunshardt</div>
		</div>
	</div>
</Card>
