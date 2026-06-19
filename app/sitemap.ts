import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { categories, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/posts/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const cats = Object.values(categories).map((c) => ({
    url: `${site.url}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    ...cats,
    ...posts,
  ];
}
