import { Page, PageHeader, CardGrid, Card, StubNotice } from "@/components/Page";
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

      <StubNotice what="Enrollment (Stripe), custom track assembly, and full module content populate later." />
    </Page>
  );
}
