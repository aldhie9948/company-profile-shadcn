<script lang="ts">
	import { base } from "$app/paths";
	import Button from "$lib/components/ui/button/button.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { LucideArrowRight } from "lucide-svelte";

	const timelines = [
		{ label: "Didirikan", value: "2010" },
		{ label: "Pelanggan Setia", value: "10+" },
		{ label: "Proyek Selesai", value: "100+" },
		{ label: "Tenaga Profesional", value: "50+" }
	];
</script>

<section id="about-us" class="container h-fit space-y-4 py-10 sm:py-32">
	<h1 class="mb-8 text-center text-4xl font-black">About Us Company</h1>
	<div class="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
		<img
			src={base.concat("/images/about-us.webp")}
			alt="two manufacture workers"
			title="two manufacture workers"
			class="w-full object-cover object-[1%] lg:h-full"
		/>
		<div class="description space-y-6 sm:p-5">
			<h2 class="text-2xl font-black">PT. Nandya Persada Sejahtera</h2>
			<p class="leading-relaxed">
				Sejak didirikan pada tahun 2010 oleh <span>Alm. Bapak Hadi Subroto</span>
				, <span>PT Nandya Persada Sejahtera</span> telah berkembang menjadi salah satu produsen kabel
				tray terkemuka di Indonesia. Berbasis di Cicadas, Gunung Putri, Bogor, kami berkomitmen untuk
				menghadirkan solusi terbaik dalam sistem pendukung kabel untuk berbagai industri, termasuk konstruksi,
				pertambangan, dan pagar keamanan.
			</p>
			<p class="leading-relaxed">
				Seiring dengan perkembangan industri yang semakin pesat, pada tahun 2012 kami melakukan
				ekspansi dengan mengambil alih operasi secara penuh guna meningkatkan skala produksi dan
				efisiensi kerja. Hingga saat ini, <span>PT Nandya Persada Sejahtera</span> terus berkembang
				dengan mengandalkan sumber daya manusia yang profesional, teknologi manufaktur modern, dan
				standar kualitas tinggi yang telah diakui melalui sertifikasi
				<span>ISO 9001:2015</span>.
			</p>
			<Button href={base.concat("/tentang-kami")}>
				<span>Baca Selengkapnya</span>
				<LucideArrowRight />
			</Button>
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
				{#each timelines as item, i (i)}
					<div class="flex flex-col space-y-2">
						<span class="text-3xl 2xl:text-4xl">{item.value}</span>
						<Separator />
						<span class="!font-semibold">{item.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.description span {
		@apply font-bold;
	}
</style>
