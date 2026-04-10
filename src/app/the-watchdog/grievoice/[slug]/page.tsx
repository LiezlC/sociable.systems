import Link from "next/link";
import { notFound } from "next/navigation";
import { grievoicePages } from "@/data/grievoice";

export function generateStaticParams() {
  return grievoicePages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = grievoicePages.find((p) => p.slug === params.slug);
  return { title: page ? `${page.title} — GrieVoice` : "GrieVoice" };
}

export default function GrieVoiceSubPage({ params }: { params: { slug: string } }) {
  const idx = grievoicePages.findIndex((p) => p.slug === params.slug);
  if (idx === -1) notFound();

  const page = grievoicePages[idx];
  const prev = idx > 0 ? grievoicePages[idx - 1] : null;
  const next = idx < grievoicePages.length - 1 ? grievoicePages[idx + 1] : null;

  return (
    <>
      {/* Page title */}
      <header className="mb-6">
        <h1 className="font-serif text-3xl tracking-tight">{page.title}</h1>
        <p className="mt-2 text-sm text-steel">{page.description}</p>
        <a
          href={page.file}
          target="_blank"
          rel="noopener"
          className="inline-block mt-2 font-mono text-xs text-steel underline underline-offset-4"
        >
          Open standalone &rarr;
        </a>
      </header>

      {/* Embedded content */}
      <div className="border border-ink/10 rounded-sm overflow-hidden bg-white mb-8">
        <iframe
          src={page.file}
          title={page.title}
          className="w-full border-0"
          style={{ minHeight: "80vh" }}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>

      {/* Prev / Next navigation */}
      <nav className="flex items-center justify-between border-t border-ink/10 pt-6">
        <div>
          {prev ? (
            <Link
              href={`/the-watchdog/grievoice/${prev.slug}`}
              className="text-sm text-steel hover:text-ink no-underline"
            >
              &larr; {prev.title}
            </Link>
          ) : (
            <Link
              href="/the-watchdog/grievoice"
              className="text-sm text-steel hover:text-ink no-underline"
            >
              &larr; GrieVoice Hub
            </Link>
          )}
        </div>
        <div>
          {next ? (
            <Link
              href={`/the-watchdog/grievoice/${next.slug}`}
              className="text-sm text-steel hover:text-ink no-underline"
            >
              {next.title} &rarr;
            </Link>
          ) : (
            <Link
              href="/the-watchdog/grievoice"
              className="text-sm text-steel hover:text-ink no-underline"
            >
              Back to Hub &rarr;
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
