import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Explicitly allow AI search crawlers (GEO strategy) alongside standard bots.
 * GPTBot=ChatGPT, OAI-SearchBot=ChatGPT Search, ClaudeBot=Claude,
 * PerplexityBot=Perplexity, Google-Extended=Google AI/Gemini.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
