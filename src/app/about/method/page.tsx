import { Page, PageHeader, StubNotice } from "@/components/Page";

export const metadata = { title: "Method" };

export default function MethodPage() {
  return (
    <Page>
      <PageHeader
        eyebrow="About · Method"
        title="Two tracks, one translation toggle"
        lede="Field research grounded in operational reality. AI-augmented analysis grounded in multi-model arena experiments. And a translation toggle that moves between ethical theory and legal contract language without losing either."
      />
      <StubNotice what="Full methodology write-up populates here." />
    </Page>
  );
}
