<script>
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="flex h-screen w-full flex-col font-sans">
	<Navbar />
	<div class="flex-grow bg-primary-100">
		<slot />
	</div>
	<div class="bg-primary-100">
		<Footer />
	</div>
</div>
