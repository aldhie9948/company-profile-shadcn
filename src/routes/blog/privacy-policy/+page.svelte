<script lang="ts">
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import dayjs from "dayjs";

	const { data } = $props();

	const lastUpdated = dayjs("2025-03-15 15:00", "YYYY-MM-DD HH:mm");
</script>

<section id="terms-of-service" class="container space-y-4 py-24">
	<h1 class="text-2xl font-black">Privacy Policy</h1>
	<small class="text-muted-foreground"
		>Last Updated: {lastUpdated.format("dddd, DD MMMM YYYY HH:mm")}</small
	>
	<Separator />
	{#each data.privacyPolicies as item, i (i)}
		<h2 class="font-bold">{item.title}</h2>
		<ul class="list-inside list-disc space-y-2 ps-5">
			{#each item.terms as term, t (t)}
				<li>{term}</li>
			{/each}
		</ul>
	{/each}
</section>
