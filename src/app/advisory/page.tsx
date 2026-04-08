import { Page, PageHeader, StubNotice } from "@/components/Page";

export const metadata = { title: "Advisory" };

export default function AdvisoryHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="Advisory"
        title="Work with the practice"
        lede="High-trust advisory engagements for organizations that already live inside decision systems that affect real lives."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        <Offering
          title="Governance critique"
          body="Decision-architecture stress-testing. Identify liability sponges, accountability gaps, and compulsory-continuation failure modes before they fail."
        />
        <Offering
          title="Grievance system design"
          body="Re-architect grievance flows to refuse unsafe continuation. Narrow triggers, mandatory human re-entry, attributable overrides."
        />
        <Offering
          title="Calvin-compliant procurement"
          body="Contract-level mechanisms for AI vendor agreements. Six named clauses. Procurement-ready."
        />
      </div>

      <StubNotice what="Case studies, contact form, and engagement process populate here. Privacy-permitting." />
    </Page>
  );
}

function Offering({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-ink/10 p-5 rounded-sm">
      <div className="font-serif text-lg">{title}</div>
      <p className="mt-2 text-sm text-steel">{body}</p>
    </div>
  );
}
