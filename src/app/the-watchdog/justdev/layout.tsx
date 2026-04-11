import Link from "next/link";
import { justdevPages } from "@/data/justdev";

export default function JustDevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 font-mono text-xs text-steel flex items-center gap-1">
        <Link href="/the-watchdog" className="underline underline-offset-4">
          The Watchdog
        </Link>
        <span>/</span>
        <Link href="/the-watchdog/justdev" className="underline underline-offset-4">
          JustDev
        </Link>
      </nav>

      {/* Section sub-nav */}
      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm border-b border-teal/20 pb-4">
        <Link href="/the-watchdog/justdev" className="text-teal font-medium hover:text-teal-dark">
          Hub
        </Link>
        {justdevPages.map((p) => (
          <Link
            key={p.slug}
            href={`/the-watchdog/justdev/${p.slug}`}
            className="text-steel hover:text-teal"
          >
            {p.title}
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
}
