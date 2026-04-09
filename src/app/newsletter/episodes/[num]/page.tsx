import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { episodes, getEpisode } from "@/data/episodes";
import { arcs } from "@/data/site";
import { getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return episodes.map((e) => ({ num: String(e.num) }));
}

export function generateMetadata({ params }: { params: { num: string } }) {
  const e = getEpisode(parseInt(params.num, 10));
  return {
    title: e ? `Ep ${e.num} — ${e.title}` : "Episode",
    description: e?.excerpt,
  };
}

export default function EpisodePage({ params }: { params: { num: string } }) {
  const num = parseInt(params.num, 10);
  const episode = getEpisode(num);
  if (!episode) notFound();

  const arc = episode.arcSlug ? arcs.find((a) => a.slug === episode.arcSlug) : null;
  const prev = getEpisode(num - 1);
  const next = getEpisode(num + 1);
  const article = getArticle(num);

  return (
    <Page>
      <div className="mb-4 font-mono text-xs text-steel flex gap-3 flex-wrap">
        <Link href="/newsletter" className="underline underline-offset-4">Newsletter</Link>
        <span>/</span>
        {arc && (
          <>
            <Link href={`/newsletter/arcs/${arc.slug}`} className="underline underline-offset-4">
              {arc.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span>Ep {String(episode.num).padStart(2, "0")}</span>
      </div>

      <PageHeader
        eyebrow={
          episode.kind === "special"
            ? `Episode ${episode.num} · Special edition · ${episode.date}`
            : episode.kind === "interlude"
            ? `Episode ${episode.num} · Sunday interlude · ${episode.date}`
            : `Episode ${episode.num} · ${episode.date}`
        }
        title={episode.title}
        lede={episode.excerpt}
      />

      <div className="relative w-full aspect-[16/9] mb-8 bg-ink/5">
        <Image
          src={episode.coverUrl}
          alt={`Cover art for episode ${episode.num}: ${episode.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover"
          priority={num <= 3}
        />
      </div>

      {episode.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-1.5">
          {episode.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border border-steel/30 text-steel"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {article ? (
        <article
          className="prose prose-ink max-w-none font-serif text-ink/90 leading-relaxed
            prose-headings:font-serif prose-headings:text-ink
            prose-a:text-ink prose-a:underline prose-a:underline-offset-4
            prose-strong:text-ink prose-blockquote:border-l-steel/40 prose-blockquote:text-steel
            prose-hr:border-ink/10"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      ) : (
        <StubNotice what="Full episode body will populate here once the article importer runs against src/data/_incoming/articles/." />
      )}

      <nav className="mt-16 pt-8 border-t border-ink/10 flex justify-between gap-4 text-sm">
        {prev ? (
          <Link href={`/newsletter/episodes/${prev.num}`} className="group max-w-[45%]">
            <div className="text-xs text-steel uppercase tracking-wider mb-1">← Previous</div>
            <div className="font-serif group-hover:underline underline-offset-4">
              Ep {String(prev.num).padStart(2, "0")} · {prev.title}
            </div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/newsletter/episodes/${next.num}`} className="group max-w-[45%] text-right">
            <div className="text-xs text-steel uppercase tracking-wider mb-1">Next →</div>
            <div className="font-serif group-hover:underline underline-offset-4">
              Ep {String(next.num).padStart(2, "0")} · {next.title}
            </div>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </Page>
  );
}
