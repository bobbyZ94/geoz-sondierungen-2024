<script lang="ts">
	import { Button } from 'flowbite-svelte'
	import { ArrowRightOutline } from 'flowbite-svelte-icons'
	export let id = 'id'
	export let showButtonLink = false
	export let buttonLinkUrl = '/'
	export let buttonLinkText = 'Button Text'
	export let title = 'Title'
	export let imageUrl = '/placeholder.jpg'
</script>

<div
	class="m-3 flex flex-col overflow-hidden rounded border border-gray-200 bg-white md:flex-row"
	{id}
>
	<img class="mb-5 object-cover md:mb-0 md:max-w-xl" src={imageUrl} alt="geotechnik" />
	<div class="p-3">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
			{title}
		</h5>
		<p class="mb-3 font-normal leading-tight text-gray-700">
			<slot />
		</p>
		{#if showButtonLink}
			<Button class="text-md" href={buttonLinkUrl}>
				{buttonLinkText}
				<ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
			</Button>
		{/if}
	</div>
</div>
