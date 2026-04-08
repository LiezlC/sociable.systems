import { Page, PageHeader, StubNotice } from "@/components/Page";
import { audienceSegments } from "@/data/site";

export const metadata = { title: "Is this for you?" };

export default function AudiencePage() {
  return (
    <Page>
      <PageHeader
        eyebrow="About · Audience"
        title="Is this for you?"
        lede="Sociable Systems is not a general AI-governance site. It is written for a specific kind of practitioner."
      />
      <ul className="space-y-4 max-w-3xl">
        {audienceSegments.map((s, i) => (
          <li key={i} className="border-l-2 border-rust/60 pl-4 text-steel">{s}</li>
        ))}
      </ul>
      <div className="mt-10 text-sm text-steel italic max-w-3xl">
        The unifying characteristic: people who already live inside decision systems that affect real lives. Not theorists — operators, managers, auditors. People who will be blamed for failures they did not architect.
      </div>
      <StubNotice what="Self-qualifier questions, reader stories, and subscribe CTA populate here." />
    </Page>
  );
}
