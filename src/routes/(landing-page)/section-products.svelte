<script lang="ts">
	import { base } from "$app/paths";
	import Button from "$lib/components/ui/button/button.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { LucideArrowRight, LucideShoppingCart } from "lucide-svelte";

	const products = [
		{
			url: base + "/images/products/cable-tray-perforated.webp",
			name: "Cable Tray Perforated",
			description: "Desain berlubang untuk ventilasi, ideal untuk kabel daya & kontrol."
		},
		{
			url: base + "/images/products/cable-tray-solid-bottom.webp",
			name: "Cable Tray Solid Bottom",
			description: "Permukaan tertutup untuk perlindungan maksimal terhadap kabel."
		},
		{
			url: base + "/images/products/cable-tray-wiremesh.webp",
			name: "Cable Tray Wiremesh",
			description: "Struktur wiremesh ringan, fleksibel, dan mudah dipasang."
		},
		{
			url: base + "/images/products/cable-ladder-heavy-duty.webp",
			name: "Cable Ladder Heavy Duty",
			description: "Dirancang untuk beban berat, cocok untuk instalasi industri."
		},
		{
			url: base + "/images/products/cable-ladder-u-type.webp",
			name: "Cable Ladder U-Type",
			description: "Desain unik untuk fleksibilitas pemasangan pada berbagai lingkungan."
		},
		{
			url: base + "/images/products/cable-ladder-w-type.webp",
			name: "Cable Ladder W-Type",
			description: "Alternatif kuat dengan daya tahan tinggi untuk proyek besar."
		},
		{
			url: base + "/images/products/bracket-clamp.webp",
			name: "Bracket & Clamp",
			description: "Aksesoris penting untuk pemasangan & keamanan kabel tray."
		},
		{
			url: base + "/images/products/jointing-set-fish-plate.webp",
			name: "Jointing Set & Fish Plate",
			description: "Menyambungkan bagian cable tray & ladder dengan stabilitas tinggi."
		}
	];
</script>

<section id="products" class="container space-y-4 py-10">
	<h1 class="text-center text-4xl font-black">
		Our Products - High-Quality Cable Support Solutions
	</h1>
	<h2 class="text-center text-lg font-semibold">
		Kami menyediakan berbagai jenis cable tray, cable ladder, dan aksesoris berkualitas tinggi untuk
		mendukung sistem kelistrikan industri Anda.
	</h2>
	<Separator />
	<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each products as product, i (i)}
			{@const href = product.url.replace("images/products", "produk").replace(".webp", "/")}
			<div class=" flex h-full flex-col space-y-2">
				<div class="rounded-lg border bg-white shadow-sm">
					<img
						src={product.url}
						alt={product.name}
						class="mx-auto aspect-square h-full w-8/12 object-contain"
					/>
				</div>
				<h1 class="text-lg font-bold">{product.name}</h1>
				<p class="grow font-light text-muted-foreground">{product.description}</p>
				<div class="flex justify-center">
					<Button variant="secondary" {href}>
						<LucideShoppingCart />
						<span>Pesan Sekarang</span>
					</Button>
				</div>
			</div>
		{/each}
		<div class="flex h-full flex-col items-center justify-center space-y-4">
			<p class="text-center font-semibold">
				Temukan lebih banyak produk unggulan dari PT. Nandya Persada Sejahtera.
			</p>
			<Button href={base.concat("/produk")}>
				<span>Lihat Semua Produk </span>
				<LucideArrowRight />
			</Button>
		</div>
	</div>
</section>
