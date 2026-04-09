import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader } from "@/components/Page";
import { arcs, sonicCycles } from "@/data/site";
import { episodesByArc } from "@/data/episodes";

export function generateStaticParams() {
  return arcs.map((a) => ({ arc: a.slug }));
}

export function generateMetadata({ params }: { params: { arc: string } }) {
  const a = arcs.find((x) => x.slug === params.arc);
  return { title: a?.title ?? "Arc" };
}

export default function ArcPage({ params }: { params: { arc: string } }) {
  const arc = arcs.find((a) => a.slug === params.arc);
  if (!arc) notFound();
  const cycle = sonicCycles.find((c) => c.linkedArc === arc.slug);
  const arcEpisodes = episodesByArc(arc.slug);

  return (
    <Page>
      <PageHeader eyebrow="Newsletter arc" title={arc.title} lede={arc.blurb} />

      {cycle && (
        <div className="mb-8 p-4 border-l-2 border-rust bg-rust/5 text-sm">
          <div className="uppercase tracking-widest text-xs text-rust mb-1">Sonic companion</div>
          <Link href={`/sonic-cycles/cycles/${cycle.slug}`} className="font-serif text-lg">
            {cycle.title} →
          </Link>
          <div className="text-steel">{cycle.blurb}</div>
        </div>
      )}

      <h2 className="font-serif text-2xl mt-8 mb-4">
        Episodes <span className="text-steel text-base font-mono">({arcEpisodes.length})</span>
      </h2>

      {arcEpisodes.length === 0 ? (
        <p className="text-steel text-sm">No episodes assigned to this arc yet.</p>
      ) : (
        <ul className="space-y-4">
          {arcEpisodes.map((e) => (
            <li key={e.num} className="border-l-2 border-steel/40 pl-4">
              <Link href={`/newsletter/episodes/${e.num}`} className="group block">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-mono text-xs text-steel">Ep {String(e.num).padStart(2, "0")}</span>
                  <span className="font-mono text-xs text-steel">{e.date}</span>
                  {e.kind === "special" && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rust">Special</span>
                  )}
                  {e.kind === "interlude" && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-steel">Interlude</span>
                  )}
                </div>
                <div className="font-serif text-lg group-hover:underline underline-offset-4">{e.title}</div>
                <div className="text-sm text-steel mb-1">{e.excerpt}</div>
                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-1.5 py-0.5 border border-steel/30 text-steel">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Page>
  );
}
