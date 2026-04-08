import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { sonicExperiments } from "@/data/site";

export function generateStaticParams() {
  return sonicExperiments.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const e = sonicExperiments.find((x) => x.slug === params.slug);
  return { title: e?.title ?? "Experiment" };
}

export default function SonicExperimentPage({ params }: { params: { slug: string } }) {
  const exp = sonicExperiments.find((e) => e.slug === params.slug);
  if (!exp) notFound();
  return (
    <Page>
      <PageHeader eyebrow="Sonic experiment" title={exp.title} lede={exp.blurb} />
      <div className="mb-8 text-sm">
        Cross-linked as research methodology at{" "}
        <Link href={`/about/arenas/${exp.arenaSlug}`} className="underline underline-offset-4">
          /about/arenas/{exp.arenaSlug}
        </Link>
        .
      </div>
      <StubNotice what="Full experiment corpus (~100–200pp of model-generated song prompts) will populate here once migrated from the Obsidian vault at 01 Research/Arenas/." />
    </Page>
  );
}
