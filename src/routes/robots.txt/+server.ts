import { env } from "$env/dynamic/private";

export const GET = () => {
	const text = `
  User-agent: *
  Disallow: /dashboard
  Allow: /
  Sitemap: ${env.HOST_DOMAIN}
  `;

	const headers = {
		"Content-Type": "text/plain"
	};

	return new Response(text, { headers });
};
