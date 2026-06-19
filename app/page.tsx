import Link from "next/link";
import { getFeaturedPosts, getAllPosts } from "@/lib/posts";
import { categories, site } from "@/lib/site";
import { PostCard } from "@/components/PostCard";
import { AdSlot } from "@/components/AdSlot";

export default function Home() {
  const featured = getFeaturedPosts(6);
  const latest = getAllPosts().slice(0, 9);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Find the right AI tool in <span className="text-emerald-600">minutes</span>, not hours.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">{site.description}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {Object.values(categories).map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm hover:border-emerald-400 hover:text-emerald-700"
            >
              {c.title}
            </Link>
          ))}
        </div>
      </section>

      <AdSlot slot="home-top" />

      {featured.length > 0 && (
        <section className="py-6">
          <h2 className="text-xl font-bold mb-5">Featured guides</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {latest.length > 0 && (
        <section className="py-10">
          <h2 className="text-xl font-bold mb-5">Latest</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      {latest.length === 0 && (
        <p className="py-10 text-center text-neutral-400">
          No articles yet. Add Markdown files to <code>content/posts/</code>.
        </p>
      )}
    </div>
  );
}
