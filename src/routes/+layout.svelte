<script lang="ts">
	import "../app.css";

	const { children } = $props();
</script>

<svelte:head>
	<meta property="og:url" content="https://www.nandyapersadasejahtera.com" />
	<meta property="og:image" content="https://www.nandyapersadasejahtera.com/images/logo.png" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "PT. Nandya Persada Sejahtera",
			"url": "https://nandyapersadasejahtera.com",
			"logo": "https://nandyapersadasejahtera.com/images/logo.png",
			"sameAs": [
				"https://www.linkedin.com/company/pt-nandya-persada-sejahtera",
				"https://web.facebook.com/nandyapersadasejahtera"
			]
		}
	</script>
</svelte:head>

{@render children()}
