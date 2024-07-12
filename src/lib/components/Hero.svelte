<script lang="ts">
	import { AngleDownOutline } from 'flowbite-svelte-icons'
	export let heroText
</script>

<div class="hero min-h-screen" style="background-image: url(/images/dph2.jpg);">
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center">
		<div class="prose max-w-md prose-headings:text-gray-200">
			{@html heroText}
			<button
				><a href="/#ueberuns"
					><AngleDownOutline class="mt-5 animate-bounce text-gray-200" size="xl" /></a
				></button
			>
		</div>
	</div>
</div>
