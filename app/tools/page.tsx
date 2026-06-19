import Link from "next/link";
import type { Metadata } from "next";
import { toolCategories, toolWithUrl } from "@/lib/tools";
import { site } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Tools Directory: The Best AI Tools by Category (2026)",
  description:
    "A curated directory of the best and most popular AI tools in 2026 — chatbots, AI search, coding, writing, image, video, voice, detectors and more, with honest guides.",
  keywords: [
    "ai tools directory",
    "best ai tools",
    "ai tools list",
    "popular ai tools 2026",
    "ai tools by category",
  ],
  alternates: { canonical: `${site.url}/tools` },
};

export default function ToolsPage() {
  const allTools = toolCategories.flatMap((c) => c.tools.map(toolWithUrl));
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI Tools Directory",
    description: metadata.description,
    numberOfItems: allTools.length,
    itemListElement: allTools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: t.url,
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={itemListLd} />

      <header className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">AI Tools Directory</h1>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-600">
          The AI tools people actually use in 2026, grouped by category. Each links to the
          official site, and to our honest guide where we have one. Most have a free tier —
          start there and pay only when you hit a real limit.
        </p>
      </header>

      {/* Category jump nav */}
      <nav className="flex flex-wrap justify-center gap-2 mb-8">
        {toolCategories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm hover:border-emerald-400 hover:text-emerald-700"
          >
            {c.title}
          </a>
        ))}
      </nav>

      <AdSlot slot="tools-top" />

      <div className="space-y-12">
        {toolCategories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-20">
            <h2 className="text-2xl font-bold">{cat.title}</h2>
            <p className="mt-1 text-neutral-600">{cat.description}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.tools.map((t) => {
                const tool = toolWithUrl(t);
                return (
                  <div
                    key={`${cat.id}-${tool.name}`}
                    className="rounded-xl border border-neutral-200 p-4 flex flex-col"
                  >
                    <div className="font-semibold">{tool.name}</div>
                    <p className="mt-1 text-sm text-neutral-500 flex-1">{tool.blurb}</p>
                    <div className="mt-3 flex items-center gap-3 text-sm">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="sponsored nofollow noopener"
                        className="font-medium text-emerald-700 hover:underline"
                      >
                        Visit site →
                      </a>
                      {tool.article && (
                        <Link
                          href={`/posts/${tool.article}`}
                          className="text-neutral-500 hover:text-emerald-700"
                        >
                          Read guide
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <AdSlot slot="tools-bottom" />

      <p className="mt-10 text-xs text-neutral-400">
        Tools and pricing change constantly — always confirm current features and prices on each
        official site. {site.name} may earn a commission from some links, which never affects which
        tools we include or recommend.
      </p>
    </div>
  );
}
