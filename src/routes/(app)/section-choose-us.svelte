<script lang="ts">
	import { Wrench, Factory, Settings, Truck, Users, DollarSign } from "lucide-svelte";

	const whyChooseUs = [
		{
			icon: Wrench,
			title: "Produk Berkualitas Tinggi",
			description: "Menggunakan material premium dengan standar industri untuk daya tahan maksimal."
		},
		{
			icon: Factory,
			title: "Berpengalaman dalam Industri",
			description:
				"Lebih dari 10 tahun dalam produksi dan distribusi kabel tray untuk berbagai sektor industri."
		},
		{
			icon: Settings,
			title: "Custom & Fleksibel",
			description: "Melayani pembuatan kabel tray sesuai spesifikasi dan kebutuhan proyek Anda."
		},
		{
			icon: Truck,
			title: "Pengiriman Cepat & Aman",
			description:
				"Didukung oleh sistem logistik yang efisien, memastikan produk sampai tepat waktu dan dalam kondisi terbaik."
		},
		{
			icon: Users,
			title: "Dukungan Teknis Profesional",
			description: "Tim ahli siap membantu Anda dalam pemilihan, pemasangan, dan konsultasi produk."
		},
		{
			icon: DollarSign,
			title: "Harga Kompetitif",
			description:
				"Menawarkan harga terbaik dengan kualitas tinggi, memastikan nilai investasi terbaik untuk pelanggan kami."
		}
	];
</script>

<section id="why-choose-us" class="bg-blue-800 py-20 text-white">
	<div class="container space-y-4">
		<h1 class="text-center text-4xl font-black">Why Choose Us?</h1>
		<p class="text-center text-lg font-semibold">
			Kami berkomitmen untuk memberikan produk dan layanan terbaik dalam industri kabel tray.
			Berikut alasan mengapa PT. Nandya Persada Sejahtera adalah pilihan terbaik untuk Anda
		</p>

		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each whyChooseUs as item, i (i)}
				<div class="flex flex-col items-center justify-center py-10 text-center">
					<item.icon class="mb-4 h-16 w-16 drop-shadow-md" />
					<h2 class="text-xl font-bold">{item.title}</h2>
					<p class="font-light text-slate-300">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
