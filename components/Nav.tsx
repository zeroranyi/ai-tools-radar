import Link from "next/link";
import { site, categories } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-black/10 sticky top-0 z-30 bg-white/85 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold text-lg tracking-tight shrink-0">
          AI&nbsp;Tools&nbsp;<span className="text-emerald-600">Radar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm text-neutral-600">
          <Link href="/tools" className="font-medium text-emerald-700 hover:text-emerald-800">
            AI Tools
          </Link>
          {Object.values(categories).map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="hover:text-emerald-600">
              {c.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500">
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
          <Link href="/tools" className="hover:text-emerald-600">
            AI Tools
          </Link>
          {Object.values(categories).map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="hover:text-emerald-600">
              {c.title}
            </Link>
          ))}
          <Link href="/about" className="hover:text-emerald-600">
            About
          </Link>
        </div>
        <p className="max-w-2xl leading-relaxed">
          {site.name} may earn an affiliate commission when you buy through links on this site.
          This does not affect our editorial recommendations. Content is reviewed for accuracy.
        </p>
        <p className="mt-3">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
