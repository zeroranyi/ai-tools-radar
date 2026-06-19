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
  Claude: "https://claude.ai",
  "Gemini Advanced": "https://gemini.google.com",
  Gemini: "https://gemini.google.com",
  "Notion AI": "https://www.notion.com/product/ai",
  Jasper: "https://www.jasper.ai",
  "Copy.ai": "https://www.copy.ai",
  "Surfer SEO": "https://surferseo.com",
  Midjourney: "https://www.midjourney.com",
  "Adobe Firefly": "https://firefly.adobe.com",
  Cursor: "https://cursor.com",
  "GitHub Copilot": "https://github.com/features/copilot",
  Windsurf: "https://windsurf.com",
  DeepSeek: "https://www.deepseek.com",
  Perplexity: "https://www.perplexity.ai",
  "Perplexity Pro": "https://www.perplexity.ai",
  Grok: "https://grok.com",
  ElevenLabs: "https://elevenlabs.io",
  Murf: "https://murf.ai",
  Runway: "https://runwayml.com",
  Synthesia: "https://www.synthesia.io",
  HeyGen: "https://www.heygen.com",
  Suno: "https://suno.com",
  Udio: "https://www.udio.com",
  CapCut: "https://www.capcut.com",
  "Opus Clip": "https://www.opus.pro",
  Pictory: "https://pictory.ai",
  Grammarly: "https://www.grammarly.com",
  QuillBot: "https://quillbot.com",
  Gamma: "https://gamma.app",
  Tome: "https://tome.app",
  Otter: "https://otter.ai",
  Fireflies: "https://fireflies.ai",
  Ollama: "https://ollama.com",
  "LM Studio": "https://lmstudio.ai",
  Ideogram: "https://ideogram.ai",
  Leonardo: "https://leonardo.ai",
  Descript: "https://www.descript.com",
};

/** Resolve a tool name to its real URL, falling back to any frontmatter URL, then "#". */
export function resolveAffiliateUrl(name: string, fallback?: string): string {
  return affiliateLinks[name] ?? fallback ?? "#";
}
