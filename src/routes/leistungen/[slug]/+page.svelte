<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="flex flex-col items-center p-5">
	<div class="my-5 text-2xl font-semibold">{data.title}</div>
	<div class="prose">{@html data.text}</div>
</div>
