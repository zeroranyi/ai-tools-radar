import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import { categories, site, type CategorySlug } from "@/lib/site";
import { PostCard } from "@/components/PostCard";
import { AdSlot } from "@/components/AdSlot";

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories[category as CategorySlug];
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `${site.url}/category/${cat.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories[category as CategorySlug];
  if (!cat) notFound();
  const posts = getPostsByCategory(category as CategorySlug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold tracking-tight">{cat.title}</h1>
      <p className="mt-2 text-neutral-600 max-w-2xl">{cat.description}</p>

      <AdSlot slot="category-top" />

      {posts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-neutral-400">No articles in this category yet.</p>
      )}
    </div>
  );
}
