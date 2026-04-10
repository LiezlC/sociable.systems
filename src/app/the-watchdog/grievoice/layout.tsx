import Link from "next/link";
import { grievoicePages } from "@/data/grievoice";

export default function GrieVoiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 font-mono text-xs text-steel flex items-center gap-1">
        <Link href="/the-watchdog" className="underline underline-offset-4">
          The Watchdog
        </Link>
        <span>/</span>
        <Link href="/the-watchdog/grievoice" className="underline underline-offset-4">
          GrieVoice
        </Link>
      </nav>

      {/* Section sub-nav */}
      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm border-b border-ink/10 pb-4">
        <Link href="/the-watchdog/grievoice" className="text-steel hover:text-ink font-medium">
          Hub
        </Link>
        {grievoicePages.map((p) => (
          <Link
            key={p.slug}
            href={`/the-watchdog/grievoice/${p.slug}`}
            className="text-steel hover:text-ink"
          >
            {p.title}
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
}
