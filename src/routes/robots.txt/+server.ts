import { env } from "$env/dynamic/private";

const sitemap = (env.HOST_DOMAIN || "").concat("/sitemap.xml");

export const GET = () => {
	const text = `
  User-agent: *
  Disallow: 
  Allow: /
  Sitemap: ${sitemap}
  `;

	const headers = {
		"Content-Type": "text/plain"
	};

	return new Response(text, { headers });
};
