<script lang="ts">
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import dayjs from "dayjs";

	const { data } = $props();

	const lastUpdated = dayjs("2025-03-15 15:00", "YYYY-MM-DD HH:mm");
</script>

<section id="terms-of-service" class="container space-y-4 sm:py-24">
	<h1 class="text-2xl font-black">Terms of Service</h1>
	<small class="text-muted-foreground"
		>Last Updated: {lastUpdated.format("dddd, DD MMMM YYYY HH:mm")}</small
	>
	<Separator />
	<p>
		Selamat datang di PT. Nandya Persada Sejahtera. Dengan mengakses atau menggunakan layanan kami,
		Anda menyetujui syarat dan ketentuan berikut.
	</p>
	{#each data.termsOfServices as item, i (i)}
		<h2 class="font-bold">{item.title}</h2>
		<ul class="list-inside list-disc space-y-2 sm:ps-5">
			{#each item.terms as term, t (t)}
				<li>{term}</li>
			{/each}
		</ul>
	{/each}
</section>
