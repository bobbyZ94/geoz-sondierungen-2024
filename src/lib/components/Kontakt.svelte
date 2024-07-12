<script lang="ts">
	import { MobilePhoneSolid, EnvelopeSolid } from 'flowbite-svelte-icons'
	export let kontakt
</script>

<div
	id="kontakt"
	class="scroll-mt-14 lg:grid lg:min-h-screen lg:scroll-mt-0 lg:grid-cols-3 lg:items-center"
>
	<div class="flex flex-col gap-5 p-5 lg:col-span-2">
		<h3 class="mb-5 text-2xl font-bold">Kontakt</h3>
		<div class="prose">
			{@html kontakt.text}
		</div>
		<div class="flex flex-col items-center gap-3">
			<a href={`mailto:${kontakt.email}`} class="flex gap-4 text-lg"
				><EnvelopeSolid />{kontakt.email}</a
			>
			<a href={`tel:${kontakt.tel}`} class="flex gap-4 text-lg"><MobilePhoneSolid />{kontakt.tel}</a
			>
		</div>
		<div class="font-semibold">Postanschrift:</div>
		<div class="flex flex-col items-center">
			<div>{kontakt.name}</div>
			<div>{kontakt.strasse_und_hausnummer}</div>
			<div>{kontakt.ort_und_plz}</div>
		</div>
	</div>
	<img src="/images/chef2.jpg" alt="chef" class="lg:rounded-full lg:drop-shadow" />
</div>
