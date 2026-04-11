import Link from "next/link";
import { justdevPages } from "@/data/justdev";

export const metadata = { title: "JustDev" };

export default function JustDevHub() {
  return (
    <>
      <header className="mb-10 border-b border-ink/10 pb-8">
        <div className="text-xs uppercase tracking-widest text-rust mb-2">Enforcement framework</div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
          Just Development Rights
        </h1>
        <p className="mt-4 text-lg text-steel max-w-3xl">
          AI-powered enforcement of community development rights. Glass box design,
          transparent enforcement rules, audit trail feeds, and enforceable metrics —
          built for IFC-aligned contexts where accountability must be architectural,
          not aspirational.
        </p>
      </header>

      <section>
        <h2 className="font-serif text-2xl mb-4">Materials</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {justdevPages.map((p) => (
            <Link
              key={p.slug}
              href={`/the-watchdog/justdev/${p.slug}`}
              className="block border border-ink/10 hover:border-teal/50 p-5 rounded-sm transition-colors no-underline"
            >
              <div className="font-serif text-lg leading-snug">{p.title}</div>
              <p className="mt-2 text-sm text-steel">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
