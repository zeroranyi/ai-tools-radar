import type { AffiliatePick } from "@/lib/posts";

/** Comparison/recommendation table — highest GEO citation rate + affiliate conversion. */
export function AffiliateTable({ picks }: { picks: AffiliatePick[] }) {
  if (!picks?.length) return null;
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-neutral-200">
      <div className="bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
        Top picks at a glance
      </div>
      <table className="w-full text-sm">
        <tbody>
          {picks.map((p) => (
            <tr key={p.name} className="border-t border-neutral-100 align-top">
              <td className="p-4 w-40">
                <div className="font-semibold">{p.name}</div>
                {p.best && (
                  <div className="text-xs text-emerald-700 mt-0.5">{p.best}</div>
                )}
              </td>
              <td className="p-4 text-neutral-600">{p.blurb}</td>
              <td className="p-4 w-32 text-right">
                <AffiliateButton href={p.url}>Try it</AffiliateButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AffiliateButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
    >
      {children}
    </a>
  );
}
