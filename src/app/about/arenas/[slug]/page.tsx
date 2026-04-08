import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { arenas, sonicExperiments } from "@/data/site";

export function generateStaticParams() {
  return arenas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = arenas.find((x) => x.slug === params.slug);
  return { title: a?.title ?? "Arena" };
}

export default function ArenaPage({ params }: { params: { slug: string } }) {
  const arena = arenas.find((a) => a.slug === params.slug);
  if (!arena) notFound();
  const sonicLink = sonicExperiments.find((e) => e.arenaSlug === arena.slug);

  return (
    <Page>
      <PageHeader eyebrow="Arena experiment" title={arena.title} lede={arena.blurb} />
      <div className="mb-8 text-xs uppercase tracking-widest text-steel/70">Status · {arena.status}</div>

      {sonicLink && (
        <div className="mb-8 p-4 border-l-2 border-rust bg-rust/5 text-sm">
          <div className="uppercase tracking-widest text-xs text-rust mb-1">Sonic output</div>
          <Link href={`/sonic-cycles/experiments/${sonicLink.slug}`} className="font-serif text-lg">
            {sonicLink.title} →
          </Link>
          <div className="text-steel">{sonicLink.blurb}</div>
        </div>
      )}

      <StubNotice what="Method, prompt design, participating models, findings, and corpus link populate here as arena material migrates from the Obsidian vault at 01 Research/Arenas/." />
    </Page>
  );
}
