import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { resolveAffiliateUrl } from "./affiliate";
import { site, type CategorySlug } from "./site";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type AffiliatePick = {
  name: string;
  blurb: string;
  url?: string; // optional override; real URL resolved from lib/affiliate.ts by name
  best?: string; // "Best for ..."
};

export type FaqItem = { q: string; a: string };

export type PostFrontmatter = {
  title: string;
  description: string;
  category: CategorySlug;
  date: string;
  updated?: string;
  author?: string;
  keywords?: string[];
  /** 40-60 word direct answer rendered first — the GEO citation hook. */
  answer: string;
  faq?: FaqItem[];
  affiliates?: AffiliatePick[];
  featured?: boolean;
  draft?: boolean;
};

export type Post = Omit<PostFrontmatter, "affiliates"> & {
  affiliates?: (AffiliatePick & { url: string })[];
  author: string;
  slug: string;
  content: string;
  readingMinutes: number;
};

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;
  const affiliates = fm.affiliates?.map((a) => ({
    ...a,
    url: resolveAffiliateUrl(a.name, a.url),
  }));
  return {
    ...fm,
    affiliates,
    author: fm.author ?? site.author.name,
    slug,
    content,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readPostFile)
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: CategorySlug): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getFeaturedPosts(limit = 6): Post[] {
  const all = getAllPosts();
  const featured = all.filter((p) => p.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export function getRelatedPosts(post: Post, limit = 4): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}
