import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { arcs, sonicCycles } from "@/data/site";

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

      <StubNotice what="Arc intro, episode list, linked canon concepts, and sonic companion links will populate here." />
    </Page>
  );
}
