import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { canon } from "@/data/site";

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
  return (
    <Page>
      <PageHeader eyebrow="The Canon" title={entry.title} lede={entry.oneLiner} />
      <div className="text-sm text-steel">
        Tags: {entry.tags.join(" · ")}
      </div>
      <StubNotice what="Full definition, examples, linked episodes, linked tracks, and see-also rail will populate here." />
    </Page>
  );
}
