<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar class="bg-primary-50 p-3" let:NavContainer>
	<NavContainer class="rounded-lg border bg-white px-5 py-2">
		<NavBrand href="/">
			<img src="/logo_website.png" class="sm:h-18 h-12" alt="Flowbite Logo" />
		</NavBrand>
		<NavHamburger />
		<NavUl ulClass="bg-white border-none flex flex-col items-center pt-3 text-xl">
			<NavLi href="/#about">Über Uns</NavLi>
			<NavLi href="/#leistungen">Leistungen</NavLi>
			<NavLi href="/#projekte">Projekte</NavLi>
			<NavLi href="/#contact">Kontakt</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
