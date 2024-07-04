<script lang="ts">
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte'
</script>

<Footer class="m-3 rounded-lg border" footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" src="/images/logo_website.png" alt="Logo" />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center my-5 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			<FooterLink href="/">Datenschutz</FooterLink>
			<FooterLink href="/">Impressum</FooterLink>
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
	<FooterCopyright href="/" by="GeoZ." />
</Footer>
