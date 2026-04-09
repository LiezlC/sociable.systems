import Link from "next/link";
import { notFound } from "next/navigation";
import { Page, PageHeader } from "@/components/Page";
import { watchdogProducts } from "@/data/site";

export function generateStaticParams() {
  return watchdogProducts.map((p) => ({ product: p.slug }));
}

export function generateMetadata({ params }: { params: { product: string } }) {
  const p = watchdogProducts.find((x) => x.slug === params.product);
  return { title: p?.title ?? "Product" };
}

type ProductExtras = {
  long?: string;
  resources?: { title: string; href: string; kind?: string }[];
};

const extras: Record<string, ProductExtras> = {
  grievoice: {
    long:
      "Multilingual voice agents for grievance systems. Current demo is worker-context. Next: community voice, supplier voice, and other beyond-labor applications. GrieVoice is the flagship instance of the Grievance Watchdog Architecture — voice-capture as the sensing layer that triggers the constitutional brake.",
    resources: [
      { title: "GrieVoice — index", href: "/watchdog/grievoice/index.html", kind: "HTML" },
      { title: "GrieVoice agent (demo frontpage)", href: "/watchdog/grievoice/grievoice-agent.html", kind: "HTML" },
      { title: "GrieVoice architecture", href: "/watchdog/grievoice/grievoice-architecture.html", kind: "HTML" },
      { title: "GrieVoice comprehensive deck", href: "/watchdog/grievoice/grievoice-comprehensive-deck.html", kind: "HTML" },
      { title: "WhatsApp integration spec", href: "/watchdog/grievoice/whatsapp-integration-spec.html", kind: "HTML" },
      { title: "USSD integration spec", href: "/watchdog/grievoice/ussd-integration-spec.html", kind: "HTML" },
    ],
  },
  "counter-narrative-dashboard": {
    long:
      "A monitoring-side counterpart to GrieVoice's voice-capture side: tracks real-world outcomes against the safety-theater claims. What is actually happening vs what the dashboards say is happening.",
  },
  blueprint: {
    long:
      "Not software — a set of constitutional principles for designing systems that can fail safely. Narrowly scoped triggers. Mandatory human re-entry. Attributable overrides. Negative power only.",
    resources: [
      { title: "The Calvin Convention (narrative)", href: "/downloads/calvin-convention-narrative.pdf", kind: "PDF" },
      { title: "The Calvin Convention (contractual)", href: "/downloads/calvin-convention-contractual.pdf", kind: "PDF" },
      { title: "Architecture of Refusal", href: "/downloads/architecture-of-refusal.pdf", kind: "PDF" },
      { title: "Constitutional Engine", href: "/downloads/constitutional-engine.pdf", kind: "PDF" },
      { title: "Industrial Safety Architecture", href: "/downloads/industrial-safety-architecture.pdf", kind: "PDF" },
    ],
  },
  "ai-vs-ifc": {
    long:
      "The arena-derived analysis that seeded the whole thesis. When an AI outperforms the gold standard of ethics, what does that tell us about the gold standard?",
    resources: [
      { title: "AI vs IFC — Executive Extract", href: "/downloads/ai-vs-ifc-executive-extract.pdf", kind: "PDF" },
      { title: "AI vs IFC — Technical Companion", href: "/downloads/ai-vs-ifc-technical-companion.pdf", kind: "PDF" },
    ],
  },
};

export default function WatchdogProductPage({ params }: { params: { product: string } }) {
  const product = watchdogProducts.find((p) => p.slug === params.product);
  if (!product) notFound();
  const extra = extras[product.slug];

  return (
    <Page>
      <div className="mb-4 font-mono text-xs text-steel">
        <Link href="/the-watchdog" className="underline underline-offset-4">The Watchdog</Link>
        <span> / </span>
        <span>{product.slug}</span>
      </div>
      <PageHeader
        eyebrow={product.slug === "grievoice" ? "Flagship product" : "Watchdog instance"}
        title={product.title}
        lede={product.blurb}
      />
      {extra?.long && <p className="max-w-3xl text-steel mb-10">{extra.long}</p>}

      {extra?.resources && (
        <section>
          <h2 className="font-serif text-2xl mb-4">Resources</h2>
          <ul className="space-y-3">
            {extra.resources.map((r) => (
              <li key={r.href} className="border-l-2 border-ink/10 pl-4">
                <a href={r.href} className="font-serif text-lg underline underline-offset-4" target="_blank" rel="noopener">
                  {r.title}
                </a>
                {r.kind && <span className="ml-2 font-mono text-xs text-steel">[{r.kind}]</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </Page>
  );
}
