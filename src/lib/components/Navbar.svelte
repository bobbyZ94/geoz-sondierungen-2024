<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar class="bg-primary-100 p-3" let:NavContainer>
	<NavContainer class="rounded-lg border bg-white px-5 py-2">
		<NavBrand href="/">
			<img src="/images/logo_website.png" class="sm:h-18 h-12" alt="Logo" />
		</NavBrand>
		<NavHamburger />
		<NavUl ulClass="bg-white border-none flex flex-col items-center pt-3 text-lg">
			<NavLi href="/#ueberuns">Über Uns</NavLi>
			<NavLi href="/#leistungen">Leistungen</NavLi>
			<NavLi href="/#projekte">Projekte</NavLi>
			<NavLi href="/#kontakt">Kontakt</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
