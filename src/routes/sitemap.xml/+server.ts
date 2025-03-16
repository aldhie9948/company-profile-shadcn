import * as sitemap from "super-sitemap";
import type { RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const GET: RequestHandler = async () => {
	const headers = { "Content-Type": "application/xml" };

	return await sitemap.response({
		origin: env.HOST_DOMAIN as string,
		headers
	});
};
