<script>
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="h-screen w-full font-sans">
	<div class="flex flex-col justify-between bg-primary-100">
		<Navbar />
		<slot />
		<Footer />
	</div>
</div>
