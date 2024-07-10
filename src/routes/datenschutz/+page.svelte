<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="prose p-5">{@html data.datenschutz[0].text}</div>
