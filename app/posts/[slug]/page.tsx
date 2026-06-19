import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { categories, site } from "@/lib/site";
import { Markdown } from "@/components/Markdown";
import { Faq } from "@/components/Faq";
import { AffiliateTable } from "@/components/Affiliate";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${site.url}/posts/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const cat = categories[post.category];
  const related = getRelatedPosts(post);
  const url = `${site.url}/posts/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: url,
  };

  const faqLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: cat?.title, item: `${site.url}/category/${post.category}` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={breadcrumbLd} />

      <nav className="text-xs text-neutral-400 mb-4">
        <Link href="/" className="hover:text-emerald-600">Home</Link>
        {" / "}
        <Link href={`/category/${post.category}`} className="hover:text-emerald-600">
          {cat?.title}
        </Link>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
        {post.title}
      </h1>
      <div className="mt-3 text-sm text-neutral-400">
        Updated {new Date(post.updated ?? post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {post.readingMinutes} min read
      </div>

      {/* Answer-first box: the GEO citation hook + first-screen content before ads */}
      <div className="mt-6 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700 mb-1">
          Quick answer
        </div>
        <p className="text-neutral-800 leading-relaxed">{post.answer}</p>
      </div>

      {post.affiliates?.length ? <AffiliateTable picks={post.affiliates} /> : null}

      <AdSlot slot="article-top" />

      <div className="mt-6">
        <Markdown>{post.content}</Markdown>
      </div>

      <AdSlot slot="article-bottom" />

      <Faq items={post.faq} />

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold mb-5">Related guides</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
