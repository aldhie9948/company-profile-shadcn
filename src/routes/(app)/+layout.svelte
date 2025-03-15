<script lang="ts">
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import SidebarMenu from "./sidebar-menu.svelte";

	let { children, data } = $props();
	let isScrolled = $state(false);

	const handleScroll = () => (isScrolled = window.scrollY > 200);

	onMount(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<header
	class="sticky inset-x-0 top-0 z-50 bg-gradient-to-b from-blue-50 to-transparent py-5 duration-200 sm:fixed"
	class:header-scroll={isScrolled}
>
	<div class="container flex items-center space-x-2">
		<img
			src={base.concat("/images/logo.png")}
			alt="nandya persada sejahtera logo"
			class="w-10 sm:w-12"
		/>
		<a href={base.concat("/")} class="flex grow flex-col leading-tight">
			<span class="text-sm font-bold sm:text-base">Nandya Persada Sejahtera</span>
			<span class="text-xs font-light sm:text-sm">Solusi Kabel Tray yang Modern dan Aman</span>
		</a>
		<div class="flex items-center space-x-6">
			{#each data.navItems as item, i (i)}
				{@const { href, label } = item}
				{@const isActive = data.pathname === href}
				<a {href} class="link" class:link-active={isActive}>{label}</a>
			{/each}
			<SidebarMenu navItems={data.navItems} />
		</div>
	</div>
</header>
<div class="grow space-y-4">
	{@render children()}
</div>

<style>
	.link {
		@apply hidden text-sm text-muted-foreground duration-200 hover:text-blue-500 lg:flex;
	}

	.link-active {
		@apply border-b-2 border-blue-500 font-bold text-blue-500;
	}

	.header-scroll {
		@apply from-white to-blue-50 shadow-md;
	}

	footer ul {
		@apply list-inside space-y-2;
		li {
			@apply flex items-center gap-x-2 text-sm text-slate-300;
		}
	}
</style>
