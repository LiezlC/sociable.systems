import Link from "next/link";
import { site, topNav } from "@/data/site";
import { Page } from "@/components/Page";

export default function Home() {
  const doors = topNav.filter((n) => n.href !== "/about");
  return (
    <Page>
      <section className="py-10 md:py-20 border-b border-ink/10">
        <div className="text-xs uppercase tracking-widest text-rust mb-4">sociable.systems</div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
          {site.tagline}.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-steel max-w-2xl">{site.audienceSubtitle}.</p>
        <p className="mt-4 text-sm italic text-steel/80">{site.toneNote}</p>
      </section>

      <section className="py-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {doors.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="block border border-ink/10 hover:border-ink/40 p-6 rounded-sm no-underline"
          >
            <div className="font-serif text-2xl">{d.label}</div>
            <div className="mt-2 text-sm text-steel">{blurbFor(d.href)}</div>
          </Link>
        ))}
      </section>

      <section className="py-8 text-sm text-steel">
        <Link href="/about" className="underline underline-offset-4">About the practice →</Link>
      </section>
    </Page>
  );
}

function blurbFor(href: string): string {
  switch (href) {
    case "/the-watchdog": return "The flagship: Grievance Watchdog Architecture, the Canon, GrieVoice, and related products.";
    case "/newsletter": return "The credibility engine. Twelve arcs, ninety-plus episodes, LinkedIn + Substack.";
    case "/sonic-cycles": return "A parallel creative channel. Sonic companions to every arc, plus the Sideways experiment.";
    case "/curriculum": return "Modules and tracks. AI-ESG Strategist, Forensic Audit Defense, Social Impact & M&E.";
    case "/advisory": return "Governance critique, decision-architecture stress-testing, Calvin-compliant procurement.";
    case "/library": return "Weaponized artifacts. Vendor scripts, Calvin Convention, Architecture of Refusal.";
    default: return "";
  }
}
