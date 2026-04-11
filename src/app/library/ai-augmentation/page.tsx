import Link from "next/link";
import { aiAugmentationPages } from "@/data/aiAugmentation";

export const metadata = { title: "AI Augmentation Arena" };

export default function AiAugmentationHub() {
  return (
    <>
      <header className="mb-10 border-b border-ink/10 pb-8">
        <div className="text-xs uppercase tracking-widest text-rust mb-2">Multi-model arena</div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
          AI Augmentation: Amplify Not Replace
        </h1>
        <p className="mt-4 text-lg text-steel max-w-3xl">
          The same brief — &ldquo;make the case for AI as amplifier rather than
          replacement&rdquo; — given to multiple models. Each response is a
          standalone interactive page. Compare how different models frame the
          narrative, what they emphasise, and what they avoid.
        </p>
      </header>

      <section>
        <h2 className="font-serif text-2xl mb-4">Model Responses</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiAugmentationPages.map((p) => (
            <Link
              key={p.slug}
              href={`/library/ai-augmentation/${p.slug}`}
              className="block border border-ink/10 hover:border-teal/50 p-5 rounded-sm transition-colors no-underline"
            >
              <div className="font-serif text-lg leading-snug">{p.title}</div>
              <div className="mt-1 font-mono text-xs text-teal">{p.model}</div>
              <p className="mt-2 text-sm text-steel">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
