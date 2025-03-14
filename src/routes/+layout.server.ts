import { base } from "$app/paths";

export const load = ({ url }) => {
	const navItems = [
		{ href: base.concat("/"), label: "Beranda" },
		{ href: base.concat("/tentang-kami"), label: "Tentang Kami" },
		{ href: base.concat("/produk"), label: "Produk" },
		{ href: base.concat("/proyek"), label: "Proyek" },
		{ href: base.concat("/blog"), label: "Blog" },
		{ href: base.concat("/kontak"), label: "Kontak" }
	];
	const { pathname } = url;
	return {
		navItems,
		pathname
	};
};
