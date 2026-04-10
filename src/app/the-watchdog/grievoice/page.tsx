import Link from "next/link";
import { grievoicePages, grievoiceDemos } from "@/data/grievoice";

export const metadata = { title: "GrieVoice" };

export default function GrieVoiceHub() {
  return (
    <>
      <header className="mb-10 border-b border-ink/10 pb-8">
        <div className="text-xs uppercase tracking-widest text-rust mb-2">Flagship product</div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">GrieVoice</h1>
        <p className="mt-4 text-lg text-steel max-w-3xl">
          Multilingual voice agents for grievance systems. Worker-context demo today;
          community voice next.
        </p>
      </header>

      <p className="max-w-3xl text-steel mb-12">
        GrieVoice is the flagship instance of the Grievance Watchdog Architecture — voice-capture
        as the sensing layer that triggers the constitutional brake. Voice-first grievance
        collection that reaches workers regardless of literacy level, language, or technology access.
        IFC-compliant, multilingual, and cost-effective.
      </p>

      {/* Documents & Specs */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl mb-2">Documents &amp; Specifications</h2>
        <p className="text-sm text-steel mb-5">
          Core documentation — each page is embedded within the site so you can navigate back here.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grievoicePages.map((p) => (
            <Link
              key={p.slug}
              href={`/the-watchdog/grievoice/${p.slug}`}
              className="block border border-ink/10 hover:border-teal/50 p-5 rounded-sm transition-colors no-underline"
            >
              <div className="font-serif text-lg leading-snug">{p.title}</div>
              <p className="mt-2 text-sm text-steel">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Demos */}
      <section className="mb-14">
        <h2 className="font-serif text-2xl mb-2">Interactive Demos</h2>
        <p className="text-sm text-steel mb-5">
          Click-through demonstrations — simulators, calculators, and interactive walkthroughs.
          These open as standalone pages.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grievoiceDemos.map((d) => (
            <a
              key={d.slug}
              href={d.href}
              target="_blank"
              rel="noopener"
              className="block border border-ink/10 hover:border-teal/50 p-5 rounded-sm transition-colors no-underline"
            >
              <div className="font-serif text-lg leading-snug">
                {d.title}
                <span className="ml-2 font-mono text-xs text-steel">[demo]</span>
              </div>
              <p className="mt-2 text-sm text-steel">{d.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* External link */}
      <section className="border-t border-ink/10 pt-8">
        <h2 className="font-serif text-2xl mb-4">Live Agent</h2>
        <a
          href="https://humevoice-virid.vercel.app/"
          target="_blank"
          rel="noopener"
          className="inline-block border border-teal/30 hover:border-teal bg-teal/5 hover:bg-teal/10 px-6 py-3 rounded-sm transition-colors font-serif no-underline"
        >
          Try the Live Voice Agent &rarr;
        </a>
      </section>
    </>
  );
}
