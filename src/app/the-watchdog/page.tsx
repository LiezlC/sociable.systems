import { Page, PageHeader, CardGrid, Card, StubNotice } from "@/components/Page";
import { canon, watchdogProducts } from "@/data/site";

export const metadata = { title: "The Watchdog" };

export default function WatchdogHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="Flagship"
        title="The Grievance Watchdog Architecture"
        lede="A constitutional brake with negative power only. The structural antidote to compulsory continuation — systems architecturally forbidden from stopping, even when faced with credible harm."
      />

      <h2 className="font-serif text-2xl mb-4">The Canon</h2>
      <p className="text-steel mb-6 max-w-3xl">
        The vocabulary that lets practitioners articulate what is structurally wrong — not as naïve resistance to technology, but as a sophisticated critique of flawed system architecture.
      </p>
      <CardGrid>
        {canon.map((c) => (
          <Card key={c.slug} href={`/the-watchdog/canon/${c.slug}`} title={c.title} blurb={c.oneLiner} />
        ))}
      </CardGrid>

      <h2 className="font-serif text-2xl mt-16 mb-4">Products & Instances</h2>
      <CardGrid>
        {watchdogProducts.map((p) => (
          <Card key={p.slug} href={`/the-watchdog/${p.slug}`} title={p.title} blurb={p.blurb} />
        ))}
      </CardGrid>

      <StubNotice what="Landing framing will expand into the full thesis from the Strategic Plan." />
    </Page>
  );
}
