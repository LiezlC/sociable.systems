import { Page, PageHeader, StubNotice } from "@/components/Page";

export const dynamicParams = true;

export function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: params.slug.replace(/-/g, " ") };
}

export default function ArtifactPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <Page>
      <PageHeader eyebrow="Library artifact" title={title} />
      <StubNotice what="Artifact description, download link, and related canon/episode links populate here once migrated from khayali-xyz/public/downloads/." />
    </Page>
  );
}
