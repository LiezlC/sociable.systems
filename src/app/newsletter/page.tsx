import Link from "next/link";
import { Page, PageHeader, CardGrid, Card, StubNotice } from "@/components/Page";
import { arcs } from "@/data/site";

export const metadata = { title: "Newsletter" };

export default function NewsletterHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="The credibility engine"
        title="The Sociable Systems Newsletter"
        lede="Twelve arcs and counting. Episodes on LinkedIn, grand-overview synthesis on Substack. Each arc builds a piece of the vocabulary practitioners use to name what is structurally wrong."
      />

      <div className="mb-8 flex gap-6 text-sm">
        <Link href="/newsletter/substack" className="underline underline-offset-4">Substack (grand overview)</Link>
        <a href="https://www.linkedin.com/" className="underline underline-offset-4" target="_blank" rel="noopener">LinkedIn (episodes)</a>
      </div>

      <h2 className="font-serif text-2xl mb-4">Arcs</h2>
      <CardGrid>
        {arcs.map((a) => (
          <Card key={a.slug} href={`/newsletter/arcs/${a.slug}`} title={a.title} blurb={a.blurb} />
        ))}
      </CardGrid>

      <StubNotice what="Episode index and individual episode pages will populate here as content is migrated from khayali-xyz/sociablesystems/articles/." />
    </Page>
  );
}
