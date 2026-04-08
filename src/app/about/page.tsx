import Link from "next/link";
import { Page, PageHeader, CardGrid, Card, StubNotice } from "@/components/Page";
import { domains, arenas, audienceSegments } from "@/data/site";

export const metadata = { title: "About" };

export default function AboutHome() {
  return (
    <Page>
      <PageHeader
        eyebrow="About the practice"
        title="Liezl Coetzee · Sociable Systems"
        lede="A South African research and advisory practice specializing in AI governance, accountability, and operational safety for high-stakes industries where digital failures have physical and human consequences."
      />

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mb-16">
        <div>
          <h2 className="font-serif text-2xl mb-3">Method</h2>
          <p className="text-steel text-sm">
            Two-track: field research grounded in twenty-plus years of operational experience, and AI-augmented analysis running multi-model arena experiments. A &ldquo;translation toggle&rdquo; moves between ethical theory and legal contract language so abstract safety concepts become enforceable operational rules.
          </p>
          <Link href="/about/method" className="inline-block mt-3 text-sm underline underline-offset-4">
            On the method →
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-2xl mb-3">Audience</h2>
          <ul className="text-sm text-steel space-y-2">
            {audienceSegments.map((s, i) => (
              <li key={i} className="border-l-2 border-ink/10 pl-3">{s}</li>
            ))}
          </ul>
          <Link href="/about/audience" className="inline-block mt-3 text-sm underline underline-offset-4">
            Is this for you? →
          </Link>
        </div>
      </div>

      <h2 className="font-serif text-2xl mb-4">Research Domains</h2>
      <CardGrid>
        {domains.map((d) => (
          <Card key={d.slug} href={`/about/domains/${d.slug}`} title={d.title} blurb={d.blurb} />
        ))}
      </CardGrid>

      <h2 className="font-serif text-2xl mt-16 mb-4">Arena Experiments</h2>
      <p className="text-steel mb-6 max-w-3xl text-sm">
        Multi-model experiments used as a research method — models placed in structured dialogue, their outputs compared, contradictions surfaced, consensus and divergence mapped.
      </p>
      <CardGrid>
        {arenas.map((a) => (
          <Card key={a.slug} href={`/about/arenas/${a.slug}`} title={a.title} blurb={a.blurb} meta={a.status} />
        ))}
      </CardGrid>

      <div className="mt-16">
        <Link href="/about/contact" className="inline-block border border-ink/40 px-5 py-3 text-sm">
          Contact →
        </Link>
      </div>

      <StubNotice what="Full bio, method deep-dive, domain pages, arena corpus, and contact form populate as content migrates." />
    </Page>
  );
}
