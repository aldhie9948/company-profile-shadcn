<script lang="ts">
	import SectionAboutUs from "./section-about-us.svelte";
	import SectionChooseUs from "./section-choose-us.svelte";
	import SectionContactUs from "./section-contact-us.svelte";
	import SectionHero from "./section-hero.svelte";
	import SectionProducts from "./section-products.svelte";
	import { env } from "$env/dynamic/public";
	import { dev } from "$app/environment";
</script>

<svelte:head>
	{#if !dev}
		<link rel="canonical" href={env.PUBLIC_HOST_DOMAIN} />
	{/if}
</svelte:head>

<SectionHero />
<SectionAboutUs />
<SectionChooseUs />
<SectionProducts />
<SectionContactUs />
