import { dev } from "$app/environment";
export const GET = () => {
	const text = !dev
		? `
  User-agent: *
  Disallow: /dashboard
  Allow: /
  `
		: `
  User-agent: * 
  Disallow: /
  `;

	return new Response(text);
};
