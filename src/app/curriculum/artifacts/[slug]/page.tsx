import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculumArtifacts, categoryLabels } from "@/data/curriculumArtifacts";

export function generateStaticParams() {
  return curriculumArtifacts.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const artifact = curriculumArtifacts.find((a) => a.slug === params.slug);
  return { title: artifact ? `${artifact.title} — Curriculum` : "Curriculum Artifact" };
}

export default function CurriculumArtifactPage({ params }: { params: { slug: string } }) {
  const idx = curriculumArtifacts.findIndex((a) => a.slug === params.slug);
  if (idx === -1) notFound();

  const artifact = curriculumArtifacts[idx];
  const prev = idx > 0 ? curriculumArtifacts[idx - 1] : null;
  const next = idx < curriculumArtifacts.length - 1 ? curriculumArtifacts[idx + 1] : null;

  return (
    <>
      {/* Page title + meta */}
      <header className="mb-6">
        <div className="text-xs uppercase tracking-widest text-steel/70 mb-1">
          {categoryLabels[artifact.category]}
        </div>
        <h1 className="font-serif text-3xl tracking-tight">{artifact.title}</h1>
        <p className="mt-2 text-sm text-steel">{artifact.description}</p>
        <a
          href={artifact.file}
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
          src={artifact.file}
          title={artifact.title}
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
              href={`/curriculum/artifacts/${prev.slug}`}
              className="text-sm text-steel hover:text-teal no-underline"
            >
              &larr; {prev.title}
            </Link>
          ) : (
            <Link
              href="/curriculum/artifacts"
              className="text-sm text-steel hover:text-teal no-underline"
            >
              &larr; All Artifacts
            </Link>
          )}
        </div>
        <div>
          {next ? (
            <Link
              href={`/curriculum/artifacts/${next.slug}`}
              className="text-sm text-steel hover:text-teal no-underline"
            >
              {next.title} &rarr;
            </Link>
          ) : (
            <Link
              href="/curriculum/artifacts"
              className="text-sm text-steel hover:text-teal no-underline"
            >
              All Artifacts &rarr;
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
