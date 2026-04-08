import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { modules, curriculumTracks } from "@/data/site";
import Link from "next/link";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const m = modules.find((x) => x.slug === params.slug);
  return { title: m?.title ?? "Module" };
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const mod = modules.find((m) => m.slug === params.slug);
  if (!mod) notFound();
  const tracks = curriculumTracks.filter((t) => t.moduleSlugs.includes(mod.slug));

  return (
    <Page>
      <PageHeader eyebrow="Curriculum module" title={mod.title} lede={mod.blurb} />

      {tracks.length > 0 && (
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-steel/70 mb-2">Appears in tracks</div>
          <ul className="flex flex-wrap gap-3">
            {tracks.map((t) => (
              <li key={t.slug}>
                <Link href={`/curriculum/tracks/${t.slug}`} className="text-sm underline underline-offset-4">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <StubNotice what="Full module content — learning outcomes, exercises, reading, contract-language deliverables — populates here." />
    </Page>
  );
}
