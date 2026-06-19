import type { FaqItem } from "@/lib/posts";

export function Faq({ items }: { items?: FaqItem[] }) {
  if (!items?.length) return null;
  return (
    <section className="my-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold mb-4">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-neutral-200 rounded-xl border border-neutral-200">
        {items.map((it) => (
          <details key={it.q} className="group p-4">
            <summary className="cursor-pointer font-medium list-none flex justify-between gap-4">
              {it.q}
              <span className="text-neutral-400 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-neutral-600 leading-relaxed">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
