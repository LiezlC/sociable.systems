import Link from "next/link";
import { Page, PageHeader, CardGrid, Card } from "@/components/Page";
import { arcs } from "@/data/site";
import { episodes, episodeCountByArc } from "@/data/episodes";

export const metadata = { title: "Newsletter" };

export default function NewsletterHome() {
  const totalCount = episodes.length;
  const recent = [...episodes].sort((a, b) => b.num - a.num).slice(0, 6);

  return (
    <Page>
      <PageHeader
        eyebrow="The credibility engine"
        title="The Sociable Systems Newsletter"
        lede={`${totalCount} episodes across twelve arcs. Daily episodes on LinkedIn, grand-overview synthesis on Substack. Each arc builds a piece of the vocabulary practitioners use to name what is structurally wrong.`}
      />

      <div className="mb-8 flex gap-6 text-sm">
        <Link href="/newsletter/substack" className="underline underline-offset-4">Substack (grand overview)</Link>
        <a href="https://www.linkedin.com/" className="underline underline-offset-4" target="_blank" rel="noopener">LinkedIn (episodes)</a>
      </div>

      <h2 className="font-serif text-2xl mb-4">Arcs</h2>
      <CardGrid>
        {arcs.map((a) => {
          const count = episodeCountByArc(a.slug);
          return (
            <Card
              key={a.slug}
              href={`/newsletter/arcs/${a.slug}`}
              title={a.title}
              blurb={`${count > 0 ? `${count} episode${count === 1 ? "" : "s"} · ` : ""}${a.blurb}`}
            />
          );
        })}
      </CardGrid>

      <h2 className="font-serif text-2xl mt-12 mb-4">Recent episodes</h2>
      <ul className="space-y-3">
        {recent.map((e) => (
          <li key={e.num} className="border-l-2 border-steel/40 pl-4">
            <Link href={`/newsletter/episodes/${e.num}`} className="group block">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-steel">Ep {String(e.num).padStart(2, "0")}</span>
                <span className="font-mono text-xs text-steel">{e.date}</span>
              </div>
              <div className="font-serif text-lg group-hover:underline underline-offset-4">{e.title}</div>
              <div className="text-sm text-steel">{e.excerpt}</div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/newsletter/episodes" className="text-sm underline underline-offset-4">All episodes →</Link>
      </div>
    </Page>
  );
}
