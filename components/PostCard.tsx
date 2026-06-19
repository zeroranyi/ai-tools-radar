import Link from "next/link";
import type { Post } from "@/lib/posts";
import { categories } from "@/lib/site";

export function PostCard({ post }: { post: Post }) {
  const cat = categories[post.category];
  return (
    <article className="group rounded-xl border border-neutral-200 p-5 hover:border-emerald-400 hover:shadow-sm transition-all">
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="text-xs font-medium text-emerald-600 mb-2">{cat?.title}</div>
        <h3 className="font-semibold leading-snug group-hover:text-emerald-700">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-500 line-clamp-2">{post.description}</p>
        <div className="mt-3 text-xs text-neutral-400">{post.readingMinutes} min read</div>
      </Link>
    </article>
  );
}
