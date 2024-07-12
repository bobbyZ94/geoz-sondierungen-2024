<script lang="ts">
	export let title
	export let id
	export let data
	export let imageSrc
	export let imageAlt
	export let reverseImg = false
</script>

<div
	{id}
	class="scroll-mt-14 lg:grid lg:min-h-screen lg:scroll-mt-0 lg:grid-cols-3 lg:items-center"
>
	{#if reverseImg}
		<div class="mb-10 p-5 lg:order-1 lg:col-span-1 lg:mb-0">
			<h3 class="mb-5 text-2xl font-bold">{title}</h3>
			<div class="prose">{@html data.text}</div>
		</div>
		<img src={imageSrc} alt={imageAlt} class="lg:order-2 lg:col-span-2 lg:rounded lg:drop-shadow" />
	{:else}
		<div class="mb-10 p-5 lg:order-2 lg:col-span-1 lg:mb-0">
			<h3 class="mb-5 text-2xl font-bold">{title}</h3>
			<div class="prose">{@html data.text}</div>
		</div>
		<img src={imageSrc} alt={imageAlt} class="lg:order-1 lg:col-span-2 lg:rounded lg:drop-shadow" />
	{/if}
</div>
