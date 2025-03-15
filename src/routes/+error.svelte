<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import Button from "$lib/components/ui/button/button.svelte";
	import Icon from "@iconify/svelte";
	import { LucideUndo } from "lucide-svelte";
</script>

<main class="flex h-full grow flex-col items-center justify-center space-y-4">
	<Icon icon="meteocons:code-red-fill" width="7rem" />
	<h1 class="text-4xl font-black">{page.status}</h1>
	<span class="text-2xl font-semibold">{page.error?.message}</span>
	<Button href={base.concat("/")} variant="secondary">
		<LucideUndo />
		<span>Kembali</span>
	</Button>
</main>
