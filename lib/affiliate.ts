/**
 * Single source of truth for outbound tool links.
 *
 * Right now these point to each tool's REAL official site, so every "Try it"
 * button works for visitors. When you join an affiliate/partner program and get
 * a tracking link (the version that earns commission), replace the URL here —
 * once — and it updates everywhere on the site automatically.
 *
 * Keys must match the `name` used in each article's frontmatter `affiliates`.
 */
export const affiliateLinks: Record<string, string> = {
  ChatGPT: "https://chatgpt.com",
  "ChatGPT Plus": "https://chatgpt.com",
  "ChatGPT / Claude": "https://chatgpt.com",
  "Claude Pro": "https://claude.ai",
  "Gemini Advanced": "https://gemini.google.com",
  "Notion AI": "https://www.notion.com/product/ai",
  Jasper: "https://www.jasper.ai",
  "Surfer SEO": "https://surferseo.com",
  Midjourney: "https://www.midjourney.com",
  "Adobe Firefly": "https://firefly.adobe.com",
};

/** Resolve a tool name to its real URL, falling back to any frontmatter URL, then "#". */
export function resolveAffiliateUrl(name: string, fallback?: string): string {
  return affiliateLinks[name] ?? fallback ?? "#";
}
