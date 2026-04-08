// Access / gating infrastructure.
//
// Three tiers — ordered, ascending:
//   "public"     — visible to anyone, indexable by search engines
//   "subscriber" — visible after free email signup
//   "member"     — visible to paid members only
//
// Nothing is actually enforced yet. Auth is not wired. Stripe is not wired.
// But every piece of content can already be tagged with a tier, every page
// can already wrap content in <Gated>, and when the auth layer lands later
// (Supabase + Stripe), enforcement becomes one implementation change in
// currentUserTier() below — no page-level refactoring needed.
//
// To change where gates fall: edit the tier field on the item in site.ts.
// To change what gating looks like: edit <Gated> in src/components/Gated.tsx.

export type AccessTier = "public" | "subscriber" | "member";

export const TIER_ORDER: Record<AccessTier, number> = {
  public: 0,
  subscriber: 1,
  member: 2,
};

export const TIER_LABEL: Record<AccessTier, string> = {
  public: "Public",
  subscriber: "Subscribers",
  member: "Members",
};

/**
 * Get the viewing user's current tier.
 *
 * STUB — currently always returns "public" (logged-out view).
 * When Supabase auth lands, read session; when Stripe lands, read subscription.
 *
 * Override for local preview via ?tier=subscriber or ?tier=member query param.
 */
export function currentUserTier(searchParams?: { tier?: string }): AccessTier {
  const override = searchParams?.tier;
  if (override === "subscriber" || override === "member") return override;
  return "public";
}

/** Can a user at `viewerTier` see content at `contentTier`? */
export function canAccess(viewerTier: AccessTier, contentTier: AccessTier): boolean {
  return TIER_ORDER[viewerTier] >= TIER_ORDER[contentTier];
}
