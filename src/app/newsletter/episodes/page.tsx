import Link from "next/link";
import { Page, PageHeader } from "@/components/Page";
import { episodes } from "@/data/episodes";
import { arcs } from "@/data/site";

export const metadata = { title: "All Episodes" };

export default function AllEpisodesPage() {
  const sorted = [...episodes].sort((a, b) => a.num - b.num);
  const arcTitle = (slug: string | null) => {
    if (!slug) return null;
    return arcs.find((a) => a.slug === slug)?.title ?? slug;
  };

  return (
    <Page>
      <PageHeader
        eyebrow="Newsletter"
        title="All episodes"
        lede={`The full LinkedIn newsletter run — ${episodes.length} episodes across twelve thematic arcs. Click any episode for its detail page.`}
      />

      <ul className="divide-y divide-ink/10">
        {sorted.map((e) => (
          <li key={e.num}>
            <Link href={`/newsletter/episodes/${e.num}`} className="group block py-3">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-mono text-xs text-steel w-12">Ep {String(e.num).padStart(2, "0")}</span>
                <span className="font-mono text-xs text-steel w-24">{e.date}</span>
                <span className="font-serif text-base group-hover:underline underline-offset-4 flex-1 min-w-0">
                  {e.title}
                </span>
                {arcTitle(e.arcSlug) && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-steel/70">
                    {arcTitle(e.arcSlug)}
                  </span>
                )}
                {e.kind === "special" && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-rust">Special</span>
                )}
                {e.kind === "interlude" && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-steel">Interlude</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
