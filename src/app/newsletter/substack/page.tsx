import { Page, PageHeader, StubNotice } from "@/components/Page";

export const metadata = { title: "Substack" };

export default function SubstackPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="Newsletter · grand overview"
        title="Substack"
        lede="The higher-altitude synthesis branch. Where episode-level writing from LinkedIn gets consolidated into longer arc overviews."
      />
      <StubNotice what="Substack embed, archive, and subscribe CTA will populate here." />
    </Page>
  );
}
