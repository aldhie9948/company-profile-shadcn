<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import "../app.css";
	let { children, data } = $props();

	let isScrolled = $state(false);

	const handleScroll = () => (isScrolled = window.scrollY > 100);

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<svelte:head>
	<title>
		PT. Nandya Persada Sejahtera - Solusi Kabel Tray yang Modern dan Aman di Bogor dan Bekasi
	</title>
	<meta
		name="description"
		content="PT. Nandya Persada Sejahtera adalah produsen kabel tray terpercaya di Bogor & Bekasi. Kami menyediakan solusi modern, aman, dan berkualitas untuk kebutuhan industri. Hubungi kami sekarang!"
	/>
	<meta
		name="keywords"
		content="kabel tray, produsen kabel tray, kabel tray Bogor, kabel tray Bekasi, solusi kabel tray, industri kabel tray"
	/>
	<meta name="author" content="PT. Nandya Persada Sejahtera" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		property="og:title"
		content="PT. Nandya Persada Sejahtera - Produsen Kabel Tray Berkualitas di Bogor & Bekasi"
	/>
	<meta
		property="og:description"
		content="Solusi kabel tray modern dan aman dari PT. Nandya Persada Sejahtera untuk kebutuhan industri Anda. Temukan produk berkualitas di Bogor & Bekasi."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.nandyapersadasejahtera.com" />
	<meta property="og:image" content="https://www.nandyapersadasejahtera.com/images/logo.png" />
	<link rel="canonical" href="https://www.nandyapersadasejahtera.com" />
</svelte:head>
<main>
	<header
		class="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-blue-50 to-transparent py-5 duration-200"
		class:header-scroll={isScrolled}
	>
		<div class="container flex items-center space-x-2">
			<img src={base.concat("/images/logo.png")} alt="nandya persada sejahtera logo" width="48px" />
			<div class="flex grow flex-col leading-tight">
				<span class="font-bold">Nandya Persada Sejahtera</span>
				<span class="text-sm font-light">Solusi Kabel Tray yang Modern dan Aman</span>
			</div>
			<div class="flex items-center space-x-4">
				{#each data.navItems as item, i (i)}
					{@const { href, label } = item}
					{@const isActive = data.pathname === href}
					<a {href} class="link" class:link-active={isActive}>{label}</a>
				{/each}
			</div>
		</div>
	</header>
	<div class="h-dvh space-y-4 overflow-auto">
		{@render children()}
	</div>
</main>

<style>
	.link {
		@apply text-sm text-muted-foreground;
	}

	.link-active {
		@apply border-b-2 border-blue-500 font-bold text-blue-500;
	}

	.header-scroll {
		@apply to-blue-50 shadow-md;
	}
</style>
