import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader } from "@/components/Page";
import { libraryFiles, getArtifact } from "@/data/library";

export function generateStaticParams() {
  return libraryFiles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArtifact(params.slug);
  return { title: a?.title ?? "Library artifact" };
}

export default function ArtifactPage({ params }: { params: { slug: string } }) {
  const a = getArtifact(params.slug);
  if (!a) notFound();

  return (
    <Page>
      <div className="mb-4 font-mono text-xs text-steel">
        <Link href="/library" className="underline underline-offset-4">Library</Link>
        <span> / </span>
        <span>{a.slug}</span>
      </div>
      <PageHeader eyebrow={`Library artifact · ${a.kind}`} title={a.title} lede={a.blurb} />

      {a.file ? (
        <div className="space-y-6">
          <a
            href={a.file}
            className="inline-block border border-ink px-5 py-3 font-mono text-sm hover:bg-ink hover:text-white transition-colors"
            download
          >
            Download {a.kind} ↓
          </a>
          {a.file.endsWith(".pdf") && (
            <div className="border border-ink/10 aspect-[4/5] w-full max-w-3xl">
              <object data={a.file} type="application/pdf" width="100%" height="100%">
                <p className="p-4 text-sm text-steel">
                  PDF preview unavailable. <a href={a.file} className="underline">Open {a.title}</a>.
                </p>
              </object>
            </div>
          )}
        </div>
      ) : (
        <p className="text-sm text-steel italic">File pending migration.</p>
      )}
    </Page>
  );
}
