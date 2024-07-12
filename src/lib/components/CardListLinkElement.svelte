<script lang="ts">
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons'
	export let slug
	export let linkText = ''
</script>

<li class="mb-4">
	<a href={`/leistungen/${slug}`} class="flex w-full justify-between text-left">
		<div class="hover:underline">{linkText}</div>
		<div class="pl-3">
			<ArrowUpRightFromSquareOutline />
		</div>
	</a>
</li>
