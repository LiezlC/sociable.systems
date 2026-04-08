import { Page, PageHeader, CardGrid, Card, StubNotice } from "@/components/Page";

export const metadata = { title: "Library" };

const artifacts = [
  { slug: "vendor-interrogation", title: "Vendor Interrogation Script", blurb: "Ten questions a manager must ask before signing off on an automated grievance or risk management system.", kind: "PDF · 1 page" },
  { slug: "calvin-convention-contractual", title: "The Calvin Convention (contractual)", blurb: "Six contractual mechanisms. Ready for vendor contracts.", kind: "PDF" },
  { slug: "calvin-convention-narrative", title: "The Calvin Convention (narrative)", blurb: "Narrative framing of the same six mechanisms. For leadership buy-in.", kind: "PDF" },
  { slug: "architecture-of-refusal", title: "The Architecture of Refusal", blurb: "Designing systems that can fail safely. Negative power only.", kind: "PDF" },
  { slug: "constitutional-engine", title: "The Constitutional Engine", blurb: "Pre-action constraints as system architecture.", kind: "PDF" },
  { slug: "industrial-safety-architecture", title: "Industrial Safety Architecture", blurb: "Applying industrial-safety principles to algorithmic systems.", kind: "PDF" },
  { slug: "ai-vs-ifc-executive", title: "AI vs IFC — Executive Extract", blurb: "Arena-derived analysis: when AI outperforms the gold standard of ethics.", kind: "PDF" },
  { slug: "ai-vs-ifc-technical", title: "AI vs IFC — Technical Companion", blurb: "Technical details behind the executive extract.", kind: "PDF" },
  { slug: "human-in-the-loop-not-enough", title: "Why 'Human in the Loop' Is Not Enough", blurb: "A guide to safer AI systems.", kind: "PDF" },
  { slug: "bending-ai-truth", title: "Bending AI Truth", blurb: "On accuracy theater and structural dishonesty.", kind: "PDF" },
  { slug: "appendix-a-right-of-override", title: "Appendix A — Right of Override", blurb: "", kind: "PDF" },
  { slug: "appendix-b-edgecase-registry", title: "Appendix B — Edge Case Registry", blurb: "", kind: "PDF" },
  { slug: "appendix-c-right-of-refusal", title: "Appendix C — Right of Refusal", blurb: "", kind: "PDF" },
];

export default function LibraryHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="Library"
        title="Weaponized artifacts for champions of change"
        lede="Not downloads. Tools with a job — designed to help practitioners argue for safer system designs inside their own organizations. Use them, cite them, bring them into procurement meetings."
      />

      <CardGrid>
        {artifacts.map((a) => (
          <Card key={a.slug} href={`/library/${a.slug}`} title={a.title} blurb={a.blurb} meta={a.kind} />
        ))}
      </CardGrid>

      <StubNotice what="PDFs migrate from khayali-xyz/public/downloads/. Each artifact gets its own page with description, download link, and related canon/episode links." />
    </Page>
  );
}
