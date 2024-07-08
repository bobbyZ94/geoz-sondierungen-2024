<script>
	import '../app.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="flex h-screen w-full flex-col items-center font-sans">
	<div class="flex w-full flex-col items-center bg-primary-100">
		<Navbar />
		<div class="container flex w-full flex-grow items-center justify-center bg-primary-100">
			<div>
				<slot />
			</div>
		</div>
		<div class="container w-full bg-primary-100">
			<Footer />
		</div>
	</div>
</div>
