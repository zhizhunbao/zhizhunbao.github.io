/**
 * sitemap.xml:首页、Coursework 页和每个项目详情页。
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
	const projects = await getCollection('projects');
	const paths = ['/', '/coursework/', ...projects.map((p) => `/projects/${p.id}/`)];
	const urls = paths.map((path) => `<url><loc>${new URL(path, site)}</loc></url>`).join('');
	const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
