<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="m-3 rounded-md border border-gray-200 bg-white p-2 drop-shadow-sm">
	<div class="mb-5 text-xl font-semibold">{data.title}</div>
	<div class="prose">{@html data.text}</div>
</div>
