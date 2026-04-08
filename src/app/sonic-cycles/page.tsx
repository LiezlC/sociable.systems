import { Page, PageHeader, CardGrid, Card, StubNotice } from "@/components/Page";
import { sonicCycles, sonicExperiments } from "@/data/site";

export const metadata = { title: "Sonic Cycles" };

export default function SonicCyclesHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="Parallel creative channel"
        title="Sonic Cycles"
        lede="A sonic dimension to the practice. Full track prompts — lyrics, palettes, production notes — that companion the newsletter arcs. Plus the Sideways experiment: a multi-model arena testing whether models share more honestly in music than prose."
      />

      <h2 className="font-serif text-2xl mb-4">Cycles</h2>
      <CardGrid>
        {sonicCycles.map((c) => (
          <Card
            key={c.slug}
            href={`/sonic-cycles/cycles/${c.slug}`}
            title={c.title}
            blurb={c.blurb}
            meta={c.linkedArc ? `Arc: ${c.linkedArc}` : undefined}
          />
        ))}
      </CardGrid>

      <h2 className="font-serif text-2xl mt-16 mb-4">Experiments</h2>
      <CardGrid>
        {sonicExperiments.map((e) => (
          <Card
            key={e.slug}
            href={`/sonic-cycles/experiments/${e.slug}`}
            title={e.title}
            blurb={e.blurb}
          />
        ))}
      </CardGrid>

      <StubNotice what="Playlist files from C:/Users/Liezl/Music/TunAI/playlists/ will be parsed into track pages. Each track gets lyrics, production notes, and constellation links to episodes + canon concepts." />
    </Page>
  );
}
