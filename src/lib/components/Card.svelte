<script lang="ts">
	import { Card, Button } from 'flowbite-svelte'
	import { ArrowRightOutline } from 'flowbite-svelte-icons'
	export let reverseImg = false
	export let id = 'id'
	export let showButtonLink = false
	export let buttonLinkUrl = '/'
	export let buttonLinkText = 'Button Text'
	export let title = 'Title'
	export let imageUrl = '/placeholder.jpg'
</script>

<div class="m-3 space-y-4" {id}>
	<Card img={imageUrl} reverse={reverseImg} size="xl" horizontal>
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
	</Card>
</div>
