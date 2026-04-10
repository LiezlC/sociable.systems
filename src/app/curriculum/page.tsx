import Link from "next/link";
import { Page, PageHeader, CardGrid, Card } from "@/components/Page";
import { curriculumTracks, modules } from "@/data/site";

export const metadata = { title: "Curriculum" };

export default function CurriculumHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="Curriculum"
        title="Operational AI Governance, in practice"
        lede="A library of core modules that recombine into audience-specific tracks. The translation toggle moves between ethical theory and legal contract language — so every module ends in something you can actually put into a vendor contract."
      />

      <h2 className="font-serif text-2xl mb-4">Tracks</h2>
      <CardGrid>
        {curriculumTracks.map((t) => (
          <Card key={t.slug} href={`/curriculum/tracks/${t.slug}`} title={t.title} blurb={t.hook} meta={t.audience} />
        ))}
      </CardGrid>

      <h2 className="font-serif text-2xl mt-16 mb-4">Core Modules</h2>
      <p className="text-steel mb-6 max-w-3xl">
        Ten atoms. Each module appears in multiple tracks, tagged so it surfaces wherever it is contextually useful.
      </p>
      <CardGrid>
        {modules.map((m) => (
          <Card key={m.slug} href={`/curriculum/modules/${m.slug}`} title={m.title} blurb={m.blurb} />
        ))}
      </CardGrid>

      <h2 className="font-serif text-2xl mt-16 mb-4">Artifacts &amp; Resources</h2>
      <p className="text-steel mb-6 max-w-3xl">
        Syllabi, training levels (0 &rarr; 6), partnership engines, reference docs, and infographics &mdash; 30+ artifacts, all navigable within the site.
      </p>
      <CardGrid>
        <Card href="/curriculum/artifacts#syllabus" title="Syllabus & Overviews" blurb="Complete curriculum overviews, artifact indexes, and the facilitator deployment matrix." />
        <Card href="/curriculum/artifacts#level" title="Training Levels (0 → 6)" blurb="Progressive training from Constitutional Foundations through Forensic Domains." />
        <Card href="/curriculum/artifacts#infographic" title="Infographics & Visuals" blurb="SI/M&E, ISAS architecture, governance divide, ESG landscape." />
      </CardGrid>
      <div className="mt-4">
        <Link href="/curriculum/artifacts" className="text-sm text-teal hover:text-teal-dark font-medium">
          Browse all 30+ artifacts &rarr;
        </Link>
      </div>

      <h2 className="font-serif text-2xl mt-16 mb-4">Curriculum cards</h2>
      <p className="text-steel mb-6 max-w-3xl text-sm">Visual summaries of the Liability Sponge sequence — useful as slide inserts for procurement conversations.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({length: 9}, (_, i) => i + 1).map((n) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={n}
            src={`/curriculum/curriculumcards/cc${n}_${["THE 201 GAP","FRAMING THE","YOU ARE THE SPONGE","THE LIABILITY SPONGE","THE REFUSAL STACK","ESCAPING THE SPONGE","THE REFUSAL STACK","DEFEATING THE SPONGE","THE UPSIDE"][n-1]}.png`}
            alt={`Curriculum card ${n}`}
            className="w-full border border-ink/10"
          />
        ))}
      </div>
    </Page>
  );
}
