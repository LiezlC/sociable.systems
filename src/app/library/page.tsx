import Link from "next/link";
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

      <h2 className="font-serif text-2xl mt-16 mb-4">Collections</h2>
      <CardGrid>
        <Card
          href="/library/ai-augmentation"
          title="AI Augmentation Arena"
          blurb="15 model responses to the same brief: make the case for AI as amplifier, not replacement. Compare Claude, GPT, Gemini, Grok, Qwen, and more."
          meta="Multi-model arena · 15 pages"
        />
      </CardGrid>
    </Page>
  );
}
