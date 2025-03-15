<script lang="ts">
	import api from "$lib/api";
	import Button from "$lib/components/ui/button/button.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import Textarea from "$lib/components/ui/textarea/textarea.svelte";
	import type { ContactForm, ErrorAxios } from "$lib/types";
	import {
		LucideMailCheck,
		LucideMapPinCheckInside,
		LucidePhoneCall,
		LucideSend
	} from "lucide-svelte";
	import { toast } from "svelte-sonner";

	let contact = $state<ContactForm>({
		name: "",
		email: "",
		msg: ""
	});

	const resetField = () => (contact = { email: "", msg: "", name: "" });

	const submit = async (e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) => {
		e.preventDefault();
		try {
			const target = e.currentTarget;
			const formData = new FormData(target);
			await api.post("/", formData);
			toast.success("Pesan berhasil dikirim.");
			resetField();
		} catch (error) {
			const { message } = error as ErrorAxios;
			toast.error(message);
		}
	};
</script>

<section id="contact-us" class="bg-slate-100 py-20">
	<div class="container space-y-4">
		<h1 class="text-center text-4xl font-black">Contact Us</h1>
		<p class="mx-auto text-center font-semibold sm:w-8/12">
			Kami siap membantu Anda dalam memilih produk kabel tray terbaik sesuai kebutuhan proyek Anda.
			Hubungi kami untuk konsultasi, penawaran harga, atau informasi lebih lanjut.
		</p>
		<div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
			<div class="space-y-4">
				<div class="space-y-2">
					<h2 class="text-xl font-bold">Informasi Kontak</h2>
					<div
						class="flex items-center gap-2 space-y-2"
						title="Alamat dan Workshop PT Nandya Persada Sejahtera"
					>
						<LucideMapPinCheckInside class="shrink-0" />
						<span>
							Jl. Pancasila IV, RT02 RW13, Cicadas, Gunung Putri
							<br />Kecamatan Gunung Putri, Kabupaten Bogor Jawa Barat 16964 - Indonesia
						</span>
					</div>
					<div
						class="flex items-center gap-2 space-y-2"
						title="Nomor Kontak PT Nandya Persada Sejahtera"
					>
						<LucidePhoneCall class="shrink-0" />
						<div class="flex flex-col">
							<span>(021) 8674344</span>
							<span>+62 821-1482-1226</span>
						</div>
					</div>
					<div class="flex items-center gap-2 space-y-2" title="Email PT Nandya Persada Sejahtera">
						<LucideMailCheck class="shrink-0" />
						<div class="flex flex-col">
							<a href="mailto:marketing@nandyapersadasejahtera.com">
								marketing@nandyapersadasejahtera.com
							</a>
							<a href="mailto:info@nandyapersadasejahtera.com"> info@nandyapersadasejahtera.com </a>
							<a href="mailto:nandyapersadanps@gmail.com">nandyapersadanps@gmail.com</a>
						</div>
					</div>
				</div>
				<div class="space-y-2">
					<h2 class="mb-4 text-xl font-bold">Formulir Kontak</h2>
					<form class="flex flex-col space-y-4" onsubmit={submit}>
						<Label class="space-y-2">
							<span>Nama</span>
							<Input
								type="text"
								name="nama"
								required
								autocomplete="off"
								placeholder="Masukkan nama lengkap Anda"
								bind:value={contact.name}
							/>
						</Label>
						<Label class="space-y-2">
							<span>Email</span>
							<Input
								type="email"
								name="email"
								required
								autocomplete="off"
								placeholder="Masukkan alamat email Anda"
								bind:value={contact.email}
							/>
						</Label>
						<Label class="space-y-2">
							<span>Pesan</span>
							<Textarea
								required
								name="pesan"
								placeholder="Tulis pesan Anda di sini..."
								bind:value={contact.msg}
							/>
						</Label>
						<Button type="submit">
							<LucideSend />
							<span>Kirim Pesan</span>
						</Button>
					</form>
				</div>
			</div>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.628880700803!2d106.93275027499216!3d-6.441678993549581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6995157667c1fd%3A0xd9f9027c40d52d81!2sPT.%20Nandya%20Persada%20Sejahtera!5e0!3m2!1sen!2sid!4v1742016819278!5m2!1sen!2sid"
					style="border:0;"
					allowfullscreen={false}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="PT. Nandya Persada Sejahtera Location"
					class="h-72 w-full rounded-md shadow-md lg:h-full"
				></iframe>
			</div>
		</div>
	</div>
</section>
