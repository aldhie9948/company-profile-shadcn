export const ssr = true;
export const trailingSlash = "always";

import { base } from "$app/paths";
import type { NavItem } from "$lib/types.js";

export const load = ({ url }) => {
	const navItems: NavItem[] = [
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
