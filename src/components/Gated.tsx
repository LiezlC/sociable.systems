import { ReactNode } from "react";
import { AccessTier, TIER_LABEL, canAccess, currentUserTier } from "@/lib/access";

/**
 * Wraps content that requires a certain tier to view.
 * If the viewer doesn't meet the tier, renders a teaser + CTA instead of the full content.
 *
 * Usage:
 *   <Gated tier="member" teaser="A one-line preview of what's behind the gate.">
 *     <FullContent />
 *   </Gated>
 */
export function Gated({
  tier,
  teaser,
  children,
  searchParams,
}: {
  tier: AccessTier;
  teaser?: string;
  children: ReactNode;
  searchParams?: { tier?: string };
}) {
  const viewer = currentUserTier(searchParams);
  if (canAccess(viewer, tier)) return <>{children}</>;

  return (
    <div className="my-8 border border-ink/20 rounded-sm p-6 bg-ink/[0.02]">
      <div className="text-xs uppercase tracking-widest text-rust mb-2">
        For {TIER_LABEL[tier].toLowerCase()}
      </div>
      {teaser && <p className="text-steel mb-4">{teaser}</p>}
      <div className="flex flex-wrap gap-4 text-sm">
        {tier === "subscriber" && (
          <a href="/subscribe" className="underline underline-offset-4">
            Subscribe (free) →
          </a>
        )}
        {tier === "member" && (
          <>
            <a href="/join" className="underline underline-offset-4">
              Become a member →
            </a>
            <a href="/subscribe" className="text-steel underline underline-offset-4">
              Or subscribe for free
            </a>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Small visible badge showing which tier a page/item belongs to.
 * Useful during the scaffold phase so Liezl can walk through and see
 * where every provisional gate lives. Can be hidden later.
 */
export function TierBadge({ tier }: { tier: AccessTier }) {
  const color =
    tier === "public" ? "text-steel/60 border-steel/20"
    : tier === "subscriber" ? "text-rust border-rust/40"
    : "text-ink border-ink/60";
  return (
    <span className={`inline-block text-[10px] uppercase tracking-widest border px-2 py-0.5 rounded-sm ${color}`}>
      {TIER_LABEL[tier]}
    </span>
  );
}
