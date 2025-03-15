<script lang="ts">
	import { base } from "$app/paths";
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import { Toaster } from "$lib/components/ui/sonner";
	import Icon from "@iconify/svelte";
	import dayjs from "dayjs";
	import "../app.css";

	const currentYear = dayjs().format("YYYY");

	let { children, data } = $props();

	const phoneNumber = "6282114821226";
	const whatsappLink = "https://api.whatsapp.com/send/?phone=" + phoneNumber;
</script>

<Toaster richColors position="bottom-center" />

<main class="flex min-h-dvh flex-col">
	{@render children()}
	<footer class="bg-blue-800 py-5 text-white">
		<div class="container space-y-4">
			<div class="grid gap-4 py-5 md:grid-cols-4 lg:grid-cols-12">
				<div class="space-y-2 md:col-span-4 lg:col-span-5">
					<h2 class="text-lg font-bold">About Company</h2>
					<img
						src={base.concat("/images/logo.png")}
						alt="logo nandya persada sejahtera"
						width="48px"
					/>
					<h3 class="text-xl font-bold">PT. Nandya Persada Sejahtera</h3>
					<p class="text-slate-300">
						Solusi modern dan aman untuk kebutuhan kabel tray di Bogor dan Bekasi. Mengutamakan
						kualitas dan inovasi dalam industri manufaktur.
					</p>
				</div>

				<div class="space-y-2 md:col-span-2 lg:col-span-3">
					<h2 class="text-lg font-bold">Contact Us</h2>
					<ul>
						<li>
							Jl. Pancasila IV, RT02 RW13, Cicadas, Gunung Putri Kecamatan Gunung Putri, Kabupaten
							Bogor Jawa Barat 16964 - Indonesia
						</li>
						<li>Telepon: (021) 8674344</li>
						<li>
							Email: <a
								href="mailto:info@nandyapersadasejahtera.com"
								class="underline underline-offset-4">info@nandyapersadasejahtera.com</a
							>
						</li>
					</ul>
				</div>
				<div class="space-y-2 lg:col-span-2">
					<h2 class="text-lg font-bold">Quick Links</h2>
					<ul>
						{#each data.navItems as item, i (i)}
							<li>
								<a href={item.href} class="text-sm text-slate-300">{item.label}</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="space-y-2 lg:col-span-2">
					<h2 class="text-lg font-bold">Follow Us</h2>
					<ul>
						<li>
							<Icon icon="mdi:linkedin" width="1.2rem" />
							<a href="https://www.linkedin.com/company/pt-nandya-persada-sejahtera">LinkedIn</a>
						</li>
						<li>
							<Icon icon="ic:baseline-facebook" width="1.2rem" />
							<a href="https://web.facebook.com/nandyapersadasejahtera">Facebook</a>
						</li>
						<li>
							<Icon icon="ic:baseline-whatsapp" width="1.2rem" />
							<a href={whatsappLink}>Whatsapp</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex flex-wrap items-center gap-2 sm:flex-nowrap">
				<small class="grow text-slate-300">
					Copyright © {currentYear} PT. Nandya Persada Sejahtera
				</small>
				<small>
					<a href={base.concat("/blog/terms-of-service")}>Terms of Service</a>
				</small>
				<Separator orientation="vertical" class="h-2" />
				<small>
					<a href={base.concat("/blog/privacy-policy")}>Privacy Policy</a>
				</small>
			</div>
		</div>
	</footer>
	<a
		href={whatsappLink}
		aria-label="contact nandya persada sejahtera via whatsapp"
		class="fixed bottom-10 right-10 rounded-full bg-gradient-to-b from-green-500 to-green-600 shadow-md sm:bottom-5 sm:right-5"
		target="_blank"
	>
		<Icon icon="ic:baseline-whatsapp" class="m-3 text-white" width="3rem" />
	</a>
</main>

<style>
	footer ul {
		@apply list-inside space-y-2;
		li {
			@apply flex items-center gap-x-2 text-sm text-slate-300;
		}
	}
</style>
