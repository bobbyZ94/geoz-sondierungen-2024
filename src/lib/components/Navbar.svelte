<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar class="sticky top-0 z-20 bg-primary-100" let:NavContainer>
	<NavContainer class="rounded-lg border bg-white px-5 py-2">
		<NavBrand href="/">
			<img src="/images/logo_website.png" class="sm:h-18 h-12" alt="Logo" />
		</NavBrand>
		<NavHamburger />
		<NavUl
			ulClass="bg-white border-none flex flex-col md:flex-row md:gap-10 md:mx-10 items-center pt-3 sm:pt-0 text-lg"
		>
			<NavLi href="/#ueberuns">Über Uns</NavLi>
			<NavLi href="/#leistungen">Leistungen</NavLi>
			<NavLi href="/#projekte">Projekte</NavLi>
			<NavLi href="/#kontakt">Kontakt</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
