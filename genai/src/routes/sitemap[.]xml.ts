import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://dropaudit.co";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/product", priority: "0.8", changefreq: "monthly" },
          { path: "/pricing", priority: "0.8", changefreq: "monthly" },
          { path: "/checklist", priority: "0.9", changefreq: "monthly" },
          { path: "/calculator", priority: "0.9", changefreq: "monthly" },
          { path: "/contact", priority: "0.6", changefreq: "yearly" },
        ];
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          entries
            .map(
              (e) =>
                `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
            )
            .join("\n") +
          `\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
