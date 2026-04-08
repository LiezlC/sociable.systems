import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { curriculumTracks, modules } from "@/data/site";

export function generateStaticParams() {
  return curriculumTracks.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = curriculumTracks.find((x) => x.slug === params.slug);
  return { title: t?.title ?? "Track" };
}

export default function TrackPage({ params }: { params: { slug: string } }) {
  const track = curriculumTracks.find((t) => t.slug === params.slug);
  if (!track) notFound();
  const mods = track.moduleSlugs
    .map((s) => modules.find((m) => m.slug === s))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));

  return (
    <Page>
      <PageHeader eyebrow="Curriculum track" title={track.title} lede={track.hook} />

      <div className="mb-8 text-sm text-steel">
        <span className="uppercase tracking-widest text-xs text-rust">Audience</span> · {track.audience}
      </div>

      <h2 className="font-serif text-2xl mb-4">Modules in this track</h2>
      <ol className="space-y-3 max-w-3xl">
        {mods.map((m, i) => (
          <li key={m.slug} className="border-l-2 border-ink/10 pl-4">
            <div className="text-xs uppercase tracking-widest text-steel/70">Module {i + 1}</div>
            <Link href={`/curriculum/modules/${m.slug}`} className="font-serif text-lg">
              {m.title}
            </Link>
            <div className="text-sm text-steel">{m.blurb}</div>
          </li>
        ))}
      </ol>

      {track.slug === "social-impact-me" && (
        <div className="mt-10 p-5 border border-rust/40 bg-rust/5 rounded-sm">
          <div className="text-xs uppercase tracking-widest text-rust mb-2">Pitch context</div>
          <p className="text-sm text-steel">
            This track was drafted for an upcoming conversation with the director of Social Impact Insights Africa. It is deliberately compact — three modules, not ten — framed around the specific pain points M&E practitioners and social researchers face when integrating AI without compromising methodological integrity or community trust.
          </p>
        </div>
      )}

      <StubNotice what="Enrollment CTA, pricing, testimonials, and full syllabus populate later." />
    </Page>
  );
}
