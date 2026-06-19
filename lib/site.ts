/**
 * Resolve the canonical site URL.
 * Priority: explicit NEXT_PUBLIC_SITE_URL → Vercel production domain → local fallback.
 * On Vercel the production .vercel.app domain is injected automatically, so the
 * free domain "just works" with no manual edits.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://ai-tools-radar.vercel.app";
}

const SITE_URL = resolveSiteUrl();

export const site = {
  name: "AI Tools Radar",
  domain: SITE_URL.replace(/^https?:\/\//, ""),
  url: SITE_URL,
  tagline: "The decision hub for AI tools, comparisons & how-to guides.",
  description:
    "AI Tools Radar helps you choose and master the best AI tools. In-depth comparisons, hands-on how-to guides, and curated prompts — updated weekly.",
  locale: "en_US",
  twitter: "@aitoolsradar",
  // Replace with your real AdSense client id once approved (e.g. ca-pub-XXXXXXXX)
  adsenseClient: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
  author: {
    name: "Jim Green",
    role: "Writer & AI tools analyst",
    bio: "Jim Green writes about AI tools at AI Tools Radar, comparing assistants, generators and SaaS so readers can pick the right one without the hype.",
    url: `${SITE_URL}/about`,
  },
} as const;

export const categories = {
  comparison: {
    slug: "comparison",
    title: "Comparisons",
    description: "Side-by-side breakdowns of the top AI tools so you can pick the right one fast.",
  },
  "how-to": {
    slug: "how-to",
    title: "How-To Guides",
    description: "Step-by-step tutorials to get real work done with AI.",
  },
  prompts: {
    slug: "prompts",
    title: "Prompts",
    description: "Battle-tested prompt libraries and templates for every use case.",
  },
  trends: {
    slug: "trends",
    title: "Trends & Data",
    description: "Stats, research and trends shaping AI search and tools.",
  },
  definitions: {
    slug: "definitions",
    title: "Explainers",
    description: "Clear, plain-English answers to the AI questions everyone is asking.",
  },
} as const;

export type CategorySlug = keyof typeof categories;
