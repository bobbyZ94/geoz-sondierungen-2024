<script lang="ts">
	import Hero from '$lib/components/Frontpage/Hero.svelte'
	import ImageLinks from '$lib/components//Frontpage/ImageLinks.svelte'
	import ImageText from '$lib/components//Frontpage/ImageText.svelte'
	import Kontakt from '$lib/components/Frontpage/Kontakt.svelte'
	import Quote from '$lib/components/Frontpage/Quote.svelte'
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="bg-primary-100 flex flex-col items-center gap-10">
	<Hero heroText={data.hero[0].text} />

	<ImageText
		data={data.was_machen_wir[0]}
		id="ueberuns"
		title="Über uns"
		imageSrc="/images/am_wasser.jpg"
		imageAlt="am_wasser"
	/>

	<ImageLinks
		data={data.leistungen}
		id="leistungen"
		title="Leistungen"
		imageSrc="/images/proben.jpg"
		imageAlt="leistungen"
		reverseImg={true}
	/>

	<ImageText
		data={data.wo_sind_wir_im_einsatz[0]}
		id="projekte"
		title="Projekte"
		imageSrc="/images/umspannwerk.jpg"
		imageAlt="umspannwerk"
	></ImageText>

	<Kontakt kontakt={data.kontakt[0]} />

	<Quote quoteText={data.zitat[0].text} />
</div>
