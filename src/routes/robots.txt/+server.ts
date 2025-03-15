import { dev } from "$app/environment";
import { env } from "$env/dynamic/private";

export const GET = () => {
	const text = !dev
		? `
  User-agent: *
  Disallow: /dashboard
  Allow: /
  Sitemap: ${env.HOST_DOMAIN}
  `
		: `
  User-agent: * 
  Disallow: /
  `;

	const headers = {
		"Content-Type": "text/plain"
	};

	return new Response(text, { headers });
};
