import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { watchdogProducts } from "@/data/site";

export function generateStaticParams() {
  return watchdogProducts.map((p) => ({ product: p.slug }));
}

export function generateMetadata({ params }: { params: { product: string } }) {
  const p = watchdogProducts.find((x) => x.slug === params.product);
  return { title: p?.title ?? "Product" };
}

export default function WatchdogProductPage({ params }: { params: { product: string } }) {
  const product = watchdogProducts.find((p) => p.slug === params.product);
  if (!product) notFound();

  const extra = extraFor(product.slug);

  return (
    <Page>
      <PageHeader
        eyebrow={product.slug === "grievoice" ? "Flagship product" : "Watchdog instance"}
        title={product.title}
        lede={product.blurb}
      />
      {extra && <div className="prose max-w-3xl text-steel">{extra}</div>}
      <StubNotice what="Full product page — demo embed, use cases, pricing (later), linked canon and episodes — will populate here." />
    </Page>
  );
}

function extraFor(slug: string): string | null {
  switch (slug) {
    case "grievoice":
      return "Multilingual voice agents for grievance systems. Current demo is worker-context. Next: community voice, supplier voice, and other beyond-labor applications. GrieVoice is the flagship instance of the Grievance Watchdog Architecture — voice-capture as the sensing layer that triggers the constitutional brake.";
    case "counter-narrative-dashboard":
      return "A monitoring-side counterpart to GrieVoice's voice-capture side: tracks real-world outcomes against the safety-theater claims. What is actually happening vs. what the dashboards say is happening.";
    case "blueprint":
      return "Not software — a set of constitutional principles for designing systems that can fail safely. Narrowly scoped triggers. Mandatory human re-entry. Attributable overrides. Negative power only.";
    case "ai-vs-ifc":
      return "The arena-derived analysis that seeded the whole thesis. When an AI outperforms the gold standard of ethics, what does that tell us about the gold standard?";
    default:
      return null;
  }
}
