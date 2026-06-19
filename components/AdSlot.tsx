import { site } from "@/lib/site";

/**
 * Ad placeholder. Renders a Google AdSense slot when NEXT_PUBLIC_ADSENSE_CLIENT
 * is set; otherwise shows a labelled placeholder so layout/density is testable
 * before AdSense approval. Keep total ad density under ~30% of content.
 */
export function AdSlot({
  slot,
  label = "Advertisement",
  className = "",
}: {
  slot?: string;
  label?: string;
  className?: string;
}) {
  const live = Boolean(site.adsenseClient && slot);

  return (
    <aside
      className={`my-8 ${className}`}
      aria-label="advertisement"
      data-ad-placeholder={live ? undefined : "true"}
    >
      <div className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1 text-center">
        {label}
      </div>
      {live ? (
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={site.adsenseClient}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      ) : (
        <div className="flex items-center justify-center h-24 rounded-lg border border-dashed border-neutral-300 bg-neutral-50 text-xs text-neutral-400">
          Ad slot ({slot ?? "unassigned"})
        </div>
      )}
    </aside>
  );
}
