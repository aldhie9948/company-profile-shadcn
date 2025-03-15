<script lang="ts">
	import { base } from "$app/paths";
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Carousel from "$lib/components/ui/carousel";
	import Autoplay from "embla-carousel-autoplay";
	import _ from "lodash";
	import { LucideArrowRight } from "lucide-svelte";

	const images = _(_.range(1, 5))
		.map((d) => base.concat("/images/carousel/", String(d), ".webp"))
		.value();
</script>

<section id="hero" class="relative w-full overflow-hidden lg:h-dvh">
	<Carousel.Root opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]} class="">
		<Carousel.Content>
			{#each images as img, i (i)}
				<Carousel.Item>
					<div class="relative">
						<!-- layer -->
						<div class="absolute inset-0 bg-slate-100/50"></div>
						<img
							src={img}
							alt={"carousel".concat(String(i))}
							class="h-dvh w-full object-cover object-center lg:h-full"
						/>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>

	<div class="absolute inset-0 flex h-full flex-col sm:container sm:justify-center">
		<div class="h-full w-full space-y-4 bg-white/80 p-8 sm:p-10 md:w-10/12 lg:w-8/12">
			<h1 class="text-2xl font-black leading-tight drop-shadow-md md:text-3xl lg:text-5xl">
				Solusi <span class="text-blue-700">Kabel Tray</span> & Ladder Modern dan
				<span class="text-green-500">Aman</span> untuk Infrastruktur Anda
			</h1>
			<h2 class="text-lg font-semibold">
				PT Nandya Persada Sejahtera – Menyediakan Kabel Tray & Ladder Berkualitas Tinggi untuk
				Proyek Komersial dan Industri.
			</h2>
			<p class="text-muted-foreground">
				Perusahaan terpercaya di bidang manufaktur kabel tray dan ladder yang didesain untuk
				memenuhi kebutuhan infrastruktur listrik modern. Dengan komitmen terhadap kualitas,
				keamanan, dan inovasi, kami menyediakan produk yang tahan lama, mudah dipasang, dan sesuai
				dengan standar industri.
			</p>
			<div class="py-1"></div>
			<Button href={base.concat("/kontak")} class="p-6">
				<span class="2xl:text-lg">Minta Penawaran</span>
				<LucideArrowRight />
			</Button>
		</div>
	</div>
</section>
