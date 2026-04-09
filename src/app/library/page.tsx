import { Page, PageHeader, CardGrid, Card } from "@/components/Page";
import { libraryFiles } from "@/data/library";

export const metadata = { title: "Library" };

export default function LibraryHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="Library"
        title="Weaponized artifacts for champions of change"
        lede="Not downloads. Tools with a job — designed to help practitioners argue for safer system designs inside their own organizations. Use them, cite them, bring them into procurement meetings."
      />

      <CardGrid>
        {libraryFiles.map((a) => (
          <Card key={a.slug} href={`/library/${a.slug}`} title={a.title} blurb={a.blurb} meta={a.kind} />
        ))}
      </CardGrid>
    </Page>
  );
}
