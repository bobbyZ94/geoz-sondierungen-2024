<script>
	import '../app.css'
	import Navbar from '$lib/components/Layout/Navbar.svelte'
	import Footer from '$lib/components/Layout/Footer.svelte'
</script>

<div class="flex min-h-screen w-full flex-col items-center font-sans">
	<div class="flex w-full max-w-5xl flex-grow flex-col">
		<Navbar />
		<div class="flex flex-grow items-center justify-center">
			<slot />
		</div>
		<Footer />
	</div>
</div>
