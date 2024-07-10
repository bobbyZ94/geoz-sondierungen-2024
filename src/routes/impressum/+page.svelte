<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="prose p-5">{@html data.impressum[0].text}</div>
