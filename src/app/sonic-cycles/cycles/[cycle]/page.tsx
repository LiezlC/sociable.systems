import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { sonicCycles, arcs } from "@/data/site";

export function generateStaticParams() {
  return sonicCycles.map((c) => ({ cycle: c.slug }));
}

export function generateMetadata({ params }: { params: { cycle: string } }) {
  const c = sonicCycles.find((x) => x.slug === params.cycle);
  return { title: c?.title ?? "Cycle" };
}

export default function CyclePage({ params }: { params: { cycle: string } }) {
  const cycle = sonicCycles.find((c) => c.slug === params.cycle);
  if (!cycle) notFound();
  const arc = cycle.linkedArc ? arcs.find((a) => a.slug === cycle.linkedArc) : null;

  return (
    <Page>
      <PageHeader eyebrow="Sonic cycle" title={cycle.title} lede={cycle.blurb} />

      {arc && (
        <div className="mb-8 p-4 border-l-2 border-steel bg-steel/5 text-sm">
          <div className="uppercase tracking-widest text-xs text-steel mb-1">Linked arc</div>
          <Link href={`/newsletter/arcs/${arc.slug}`} className="font-serif text-lg">
            {arc.title} →
          </Link>
        </div>
      )}

      <StubNotice what="Track list with per-track pages (lyrics, sonic palette, production notes, audio embeds) populates from the playlist markdown files." />
    </Page>
  );
}
