import type { Metadata } from "next";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} and ${site.author.name}.`,
  alternates: { canonical: `${site.url}/about` },
};

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.author.name,
    jobTitle: site.author.role,
    description: site.author.bio,
    url: site.author.url,
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={personLd} />
      <h1 className="text-3xl font-extrabold tracking-tight">About {site.name}</h1>
      <p className="mt-4 text-neutral-600 leading-relaxed">
        {site.name} exists to help you choose and master AI tools without the hype. We compare
        assistants, generators and AI SaaS on what actually matters — price, real use cases and
        trade-offs — so you can decide fast.
      </p>

      <h2 className="mt-10 text-xl font-bold">Who writes here</h2>
      <div className="mt-4 flex items-start gap-4">
        <div className="h-14 w-14 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
          JG
        </div>
        <div>
          <div className="font-semibold">{site.author.name}</div>
          <div className="text-sm text-emerald-700">{site.author.role}</div>
          <p className="mt-2 text-neutral-600 leading-relaxed">{site.author.bio}</p>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold">How we keep content accurate</h2>
      <ul className="mt-4 list-disc pl-6 text-neutral-600 space-y-2">
        <li>Every article shows a clear last-updated date.</li>
        <li>Pricing and features are checked against each tool&apos;s official site.</li>
        <li>Recommendations are independent; we may earn a commission from some links.</li>
      </ul>
    </div>
  );
}
