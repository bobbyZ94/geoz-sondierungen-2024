<script>
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="flex h-screen w-full flex-col justify-between bg-primary-50 font-sans">
	<Navbar />
	<slot />
	<Footer />
</div>
