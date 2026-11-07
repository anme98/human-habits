import type { APIRoute } from "astro";

/** Include a sitemap URL only when SITE_URL is configured for deployment. */
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /${site ? `\n\nSitemap: ${new URL("sitemap-index.xml", site).href}` : ""}\n`,
    {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    },
  );
