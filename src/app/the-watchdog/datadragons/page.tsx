import Link from "next/link";
import { datadragonPages } from "@/data/datadragons";

export const metadata = { title: "DataDragons" };

export default function DataDragonsHub() {
  return (
    <>
      <header className="mb-10 border-b border-ink/10 pb-8">
        <div className="text-xs uppercase tracking-widest text-rust mb-2">Newsletter companion</div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">DataDragons</h1>
        <p className="mt-4 text-lg text-steel max-w-3xl">
          Educational materials for the DataDragons newsletter arc — learning
          dimensional modelling and data mastery through fantasy-themed quests
          and interactive challenges.
        </p>
      </header>

      <section>
        <h2 className="font-serif text-2xl mb-4">Materials</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {datadragonPages.map((p) => (
            <Link
              key={p.slug}
              href={`/the-watchdog/datadragons/${p.slug}`}
              className="block border border-ink/10 hover:border-teal/50 p-5 rounded-sm transition-colors no-underline"
            >
              <div className="font-serif text-lg leading-snug">{p.title}</div>
              <p className="mt-2 text-sm text-steel">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10 p-5 border-l-2 border-teal/30 text-sm text-steel">
        These materials are companions to the{" "}
        <Link href="/newsletter/arcs/datadragons" className="text-teal underline underline-offset-4">
          DataDragons newsletter arc
        </Link>
        .
      </div>
    </>
  );
}
