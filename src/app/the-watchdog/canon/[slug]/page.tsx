import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Page, PageHeader } from "@/components/Page";
import { canon } from "@/data/site";
import { canonContent } from "@/data/canonContent";
import { episodes } from "@/data/episodes";

export function generateStaticParams() {
  return canon.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = canon.find((x) => x.slug === params.slug);
  return { title: c?.title ?? "Canon entry" };
}

export default function CanonEntry({ params }: { params: { slug: string } }) {
  const entry = canon.find((c) => c.slug === params.slug);
  if (!entry) notFound();
  const body = canonContent[entry.slug];
  const html = body ? (marked.parse(body, { async: false }) as string) : null;
  const related = episodes.filter((e) =>
    e.tags.some((t) => entry.tags.includes(t.toLowerCase().replace(/\s+/g, "-")))
  );

  return (
    <Page>
      <div className="mb-4 font-mono text-xs text-steel">
        <Link href="/the-watchdog" className="underline underline-offset-4">The Watchdog</Link>
        <span> / Canon / </span>
        <span>{entry.slug}</span>
      </div>
      <PageHeader eyebrow="The Canon" title={entry.title} lede={entry.oneLiner} />

      {html && (
        <article
          className="prose prose-ink max-w-none font-serif text-ink/90 leading-relaxed
            prose-headings:font-serif prose-a:text-ink prose-a:underline prose-a:underline-offset-4
            prose-blockquote:border-l-steel/40 prose-blockquote:text-steel"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}

      <div className="mt-10 text-xs font-mono text-steel">
        Tags: {entry.tags.join(" · ")}
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl mb-4">Related episodes</h2>
          <ul className="space-y-2 text-sm">
            {related.slice(0, 10).map((e) => (
              <li key={e.num}>
                <Link href={`/newsletter/episodes/${e.num}`} className="underline underline-offset-4">
                  Ep {String(e.num).padStart(2, "0")} · {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Page>
  );
}
