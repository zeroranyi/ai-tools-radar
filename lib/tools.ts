import { resolveAffiliateUrl } from "./affiliate";

export type DirectoryTool = {
  name: string;
  blurb: string;
  /** slug of a related on-site article for internal linking (optional) */
  article?: string;
};

export type ToolCategory = {
  id: string;
  title: string;
  description: string;
  /** primary hot keywords this category targets */
  keywords: string[];
  tools: DirectoryTool[];
};

export const toolCategories: ToolCategory[] = [
  {
    id: "chatbots",
    title: "AI Chatbots & Assistants",
    description: "General-purpose AI assistants for writing, research, coding and everyday questions.",
    keywords: ["best ai chatbot", "chatgpt alternatives", "ai assistant"],
    tools: [
      { name: "ChatGPT", blurb: "The most popular all-round assistant.", article: "is-chatgpt-plus-worth-it" },
      { name: "Claude", blurb: "Best for writing and coding; long context.", article: "is-claude-pro-worth-it" },
      { name: "Gemini", blurb: "Native AI across Google Workspace.", article: "gemini-vs-chatgpt" },
      { name: "DeepSeek", blurb: "Strong, low-cost open challenger.", article: "deepseek-vs-chatgpt-for-coding" },
      { name: "Grok", blurb: "Real-time, X-integrated assistant.", article: "grok-vs-chatgpt" },
      { name: "Microsoft Copilot", blurb: "AI across Windows and Microsoft 365." },
    ],
  },
  {
    id: "search",
    title: "AI Search",
    description: "Answer engines that cite sources instead of returning a list of links.",
    keywords: ["ai search", "perplexity alternatives", "chatgpt vs google"],
    tools: [
      { name: "Perplexity", blurb: "Cited, source-linked AI answers.", article: "is-perplexity-pro-worth-it" },
      { name: "ChatGPT", blurb: "Search with browsing built in.", article: "chatgpt-vs-google" },
      { name: "Gemini", blurb: "Google's AI answers and Overviews.", article: "perplexity-vs-google" },
    ],
  },
  {
    id: "coding",
    title: "AI Coding Tools",
    description: "AI editors and assistants that write, refactor and debug code.",
    keywords: ["best ai coding assistant", "cursor vs copilot", "ai code editor"],
    tools: [
      { name: "Cursor", blurb: "AI-first editor with codebase context.", article: "is-cursor-worth-it" },
      { name: "GitHub Copilot", blurb: "Autocomplete inside your editor.", article: "is-github-copilot-worth-it" },
      { name: "Windsurf", blurb: "Agentic AI-first editor.", article: "windsurf-vs-cursor" },
      { name: "Claude", blurb: "Reasoning for hard problems & refactors.", article: "how-to-use-claude-for-coding" },
      { name: "Replit", blurb: "Browser IDE with AI agent." },
      { name: "v0", blurb: "Generate UI/app code from prompts." },
      { name: "Bolt", blurb: "Build and deploy apps from a prompt." },
    ],
  },
  {
    id: "writing",
    title: "AI Writing Tools",
    description: "Drafting, marketing copy, SEO content and proofreading.",
    keywords: ["best ai writing tools", "jasper alternatives", "ai content writer"],
    tools: [
      { name: "ChatGPT", blurb: "Most versatile drafting tool.", article: "best-ai-writing-tools" },
      { name: "Jasper", blurb: "Marketing copy with brand voice.", article: "jasper-ai-review" },
      { name: "Copy.ai", blurb: "Affordable marketing templates.", article: "copy-ai-review" },
      { name: "Writesonic", blurb: "SEO-leaning content generation.", article: "best-jasper-alternatives" },
      { name: "Surfer SEO", blurb: "Optimize drafts to rank on Google.", article: "how-to-use-chatgpt-for-seo" },
      { name: "Grammarly", blurb: "Grammar, clarity and tone polishing." },
      { name: "QuillBot", blurb: "Paraphrasing and rewriting." },
    ],
  },
  {
    id: "image",
    title: "AI Image Generators",
    description: "Create art, product visuals and graphics from text prompts.",
    keywords: ["best ai image generator", "midjourney alternatives", "midjourney vs dalle"],
    tools: [
      { name: "Midjourney", blurb: "Benchmark for artistic quality.", article: "is-midjourney-worth-it" },
      { name: "DALL·E", blurb: "Easy generation inside ChatGPT.", article: "midjourney-vs-dalle" },
      { name: "Adobe Firefly", blurb: "Commercial-safe, Photoshop-integrated.", article: "best-ai-image-generators" },
      { name: "Stable Diffusion", blurb: "Free, open, fully controllable." },
      { name: "Flux", blurb: "High-quality open image model." },
      { name: "Ideogram", blurb: "Best at readable text in images.", article: "midjourney-alternatives" },
      { name: "Leonardo", blurb: "Game and design asset generation." },
    ],
  },
  {
    id: "video",
    title: "AI Video Generators",
    description: "Generate and edit video, and turn long clips into shorts.",
    keywords: ["best ai video generator", "sora vs runway", "ai video editor"],
    tools: [
      { name: "Runway", blurb: "Generation plus a full editing suite.", article: "runway-free-trial" },
      { name: "Sora", blurb: "OpenAI's realistic text-to-video.", article: "sora-vs-runway-vs-veo" },
      { name: "Veo", blurb: "Google's high-fidelity video model." },
      { name: "Pika", blurb: "Fast, creative short clip generation." },
      { name: "Kling", blurb: "Realistic generations, long shots." },
      { name: "Descript", blurb: "Edit video by editing the transcript.", article: "descript-vs-capcut" },
      { name: "CapCut", blurb: "Captions, effects and social edits." },
      { name: "Opus Clip", blurb: "Long videos into ready-to-post shorts." },
    ],
  },
  {
    id: "avatars",
    title: "AI Avatars & Voice",
    description: "Talking-head avatar videos, voiceover and voice cloning.",
    keywords: ["best ai voice generator", "heygen vs synthesia", "ai avatar video"],
    tools: [
      { name: "ElevenLabs", blurb: "Most realistic AI voice and cloning.", article: "best-ai-voice-generators" },
      { name: "Murf", blurb: "All-in-one voiceover studio.", article: "elevenlabs-vs-murf" },
      { name: "HeyGen", blurb: "Fast, flexible avatar videos.", article: "heygen-vs-synthesia" },
      { name: "Synthesia", blurb: "Polished training/corporate avatars.", article: "synthesia-review" },
      { name: "Play.ht", blurb: "Text-to-speech and voice cloning." },
      { name: "Captions", blurb: "AI video, captions and dubbing." },
    ],
  },
  {
    id: "music",
    title: "AI Music",
    description: "Generate full songs with vocals from a prompt.",
    keywords: ["best ai music generator", "suno vs udio"],
    tools: [
      { name: "Suno", blurb: "Easiest full songs with vocals.", article: "suno-vs-udio" },
      { name: "Udio", blurb: "Audio quality and finer control.", article: "suno-vs-udio" },
      { name: "Soundraw", blurb: "Royalty-free AI music for video." },
    ],
  },
  {
    id: "detectors",
    title: "AI Detectors & Humanizers",
    description: "Detect AI-written text — and the tools that try to humanize it.",
    keywords: ["best ai detector", "humanize ai text", "is ai content detectable"],
    tools: [
      { name: "GPTZero", blurb: "Popular AI-content detector.", article: "best-ai-detectors" },
      { name: "Originality.ai", blurb: "Detector built for publishers.", article: "best-ai-detectors" },
      { name: "Copyleaks", blurb: "AI detection and plagiarism.", article: "is-ai-content-detectable" },
      { name: "Turnitin", blurb: "Academic AI-writing detection." },
      { name: "Undetectable.ai", blurb: "Rewrites text to read as human.", article: "how-to-humanize-ai-text" },
      { name: "QuillBot", blurb: "Paraphraser often used to humanize." },
    ],
  },
  {
    id: "productivity",
    title: "AI Notes & Productivity",
    description: "Meeting notes, knowledge bases and document Q&A.",
    keywords: ["best ai note taking app", "ai meeting notes"],
    tools: [
      { name: "Notion AI", blurb: "AI inside your workspace.", article: "notion-ai-vs-chatgpt" },
      { name: "Otter", blurb: "Live meeting transcription.", article: "best-ai-note-taking-app" },
      { name: "Fireflies", blurb: "Notes that flow into your tools." },
      { name: "NotebookLM", blurb: "Chat with and summarize your sources." },
      { name: "Obsidian", blurb: "Local-first notes, AI via plugins.", article: "notion-ai-vs-obsidian" },
    ],
  },
  {
    id: "presentations",
    title: "AI Presentations",
    description: "Turn a prompt or outline into a finished deck.",
    keywords: ["best ai presentation tool", "gamma vs tome"],
    tools: [
      { name: "Gamma", blurb: "Fast, editable decks, docs and pages.", article: "gamma-vs-tome" },
      { name: "Tome", blurb: "Narrative, design-forward decks.", article: "gamma-vs-tome" },
      { name: "Beautiful.ai", blurb: "Design-rule-driven slide builder." },
      { name: "Canva AI", blurb: "Graphics, decks and social posts.", article: "best-ai-for-social-media" },
    ],
  },
  {
    id: "automation",
    title: "AI Agents & Automation",
    description: "Connect apps and let AI run multi-step workflows.",
    keywords: ["best ai agents", "zapier vs make", "ai automation"],
    tools: [
      { name: "Zapier", blurb: "Easiest automation, most integrations.", article: "zapier-ai-vs-make" },
      { name: "Make", blurb: "Powerful, visual, cost-effective.", article: "zapier-ai-vs-make" },
      { name: "n8n", blurb: "Open-source, self-hostable automation." },
      { name: "Cursor", blurb: "Agentic coding edits across files.", article: "best-ai-agents" },
    ],
  },
  {
    id: "local",
    title: "Run AI Locally (Free & Private)",
    description: "Open models you can run on your own machine at no cost.",
    keywords: ["best local llm", "run llm locally free", "open source ai"],
    tools: [
      { name: "Ollama", blurb: "One-command local model runner.", article: "how-to-run-a-local-llm" },
      { name: "LM Studio", blurb: "GUI to download and run models.", article: "ollama-vs-lm-studio" },
      { name: "DeepSeek", blurb: "Strong open-weight model.", article: "best-local-llms-free" },
    ],
  },
];

export function toolWithUrl(t: DirectoryTool) {
  return { ...t, url: resolveAffiliateUrl(t.name) };
}
