import Link from "next/link";
import { notFound } from "next/navigation";
import { arcCompanions } from "@/data/arcCompanions";
import { arcs } from "@/data/site";

export function generateStaticParams() {
  return arcCompanions.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const companion = arcCompanions.find((c) => c.slug === params.slug);
  return { title: companion?.title ?? "Arc Companion" };
}

export default function ArcCompanionPage({ params }: { params: { slug: string } }) {
  const companion = arcCompanions.find((c) => c.slug === params.slug);
  if (!companion) notFound();
  const arc = arcs.find((a) => a.slug === companion.arcSlug);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 font-mono text-xs text-steel flex items-center gap-1">
        <Link href="/newsletter" className="underline underline-offset-4">
          Newsletter
        </Link>
        <span>/</span>
        {arc && (
          <>
            <Link href={`/newsletter/arcs/${arc.slug}`} className="underline underline-offset-4">
              {arc.title}
            </Link>
            <span>/</span>
          </>
        )}
        <span>Companion</span>
      </nav>

      <header className="mb-6">
        <div className="text-xs uppercase tracking-widest text-rust mb-2">Arc companion</div>
        <h1 className="font-serif text-3xl tracking-tight">{companion.title}</h1>
        <p className="mt-2 text-sm text-steel">{companion.description}</p>
        <a
          href={companion.file}
          target="_blank"
          rel="noopener"
          className="inline-block mt-2 font-mono text-xs text-steel underline underline-offset-4"
        >
          Open standalone &rarr;
        </a>
      </header>

      <div className="border border-ink/10 rounded-sm overflow-hidden bg-white mb-8">
        <iframe
          src={companion.file}
          title={companion.title}
          className="w-full border-0"
          style={{ minHeight: "80vh" }}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>

      {arc && (
        <nav className="border-t border-ink/10 pt-6">
          <Link href={`/newsletter/arcs/${arc.slug}`} className="text-sm text-steel hover:text-teal no-underline">
            &larr; Back to {arc.title}
          </Link>
        </nav>
      )}
    </div>
  );
}
