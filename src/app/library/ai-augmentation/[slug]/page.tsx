import Link from "next/link";
import { notFound } from "next/navigation";
import { aiAugmentationPages } from "@/data/aiAugmentation";

export function generateStaticParams() {
  return aiAugmentationPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = aiAugmentationPages.find((p) => p.slug === params.slug);
  return { title: page ? `${page.title} — AI Augmentation` : "AI Augmentation" };
}

export default function AiAugmentationSubPage({ params }: { params: { slug: string } }) {
  const idx = aiAugmentationPages.findIndex((p) => p.slug === params.slug);
  if (idx === -1) notFound();

  const page = aiAugmentationPages[idx];
  const prev = idx > 0 ? aiAugmentationPages[idx - 1] : null;
  const next = idx < aiAugmentationPages.length - 1 ? aiAugmentationPages[idx + 1] : null;

  return (
    <>
      <header className="mb-6">
        <div className="font-mono text-xs text-teal mb-1">{page.model}</div>
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

      <div className="border border-ink/10 rounded-sm overflow-hidden bg-white mb-8">
        <iframe
          src={page.file}
          title={page.title}
          className="w-full border-0"
          style={{ minHeight: "80vh" }}
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>

      <nav className="flex items-center justify-between border-t border-ink/10 pt-6">
        <div>
          {prev ? (
            <Link href={`/library/ai-augmentation/${prev.slug}`} className="text-sm text-steel hover:text-teal no-underline">
              &larr; {prev.model}: {prev.title}
            </Link>
          ) : (
            <Link href="/library/ai-augmentation" className="text-sm text-steel hover:text-teal no-underline">
              &larr; All Models
            </Link>
          )}
        </div>
        <div>
          {next ? (
            <Link href={`/library/ai-augmentation/${next.slug}`} className="text-sm text-steel hover:text-teal no-underline">
              {next.model}: {next.title} &rarr;
            </Link>
          ) : (
            <Link href="/library/ai-augmentation" className="text-sm text-steel hover:text-teal no-underline">
              All Models &rarr;
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
