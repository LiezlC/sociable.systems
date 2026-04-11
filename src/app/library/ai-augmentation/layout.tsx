import Link from "next/link";
import { aiAugmentationPages } from "@/data/aiAugmentation";

export default function AiAugmentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 font-mono text-xs text-steel flex items-center gap-1">
        <Link href="/library" className="underline underline-offset-4">
          Library
        </Link>
        <span>/</span>
        <Link href="/library/ai-augmentation" className="underline underline-offset-4">
          AI Augmentation
        </Link>
      </nav>

      {/* Section sub-nav */}
      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm border-b border-teal/20 pb-4">
        <Link href="/library/ai-augmentation" className="text-teal font-medium hover:text-teal-dark">
          Hub
        </Link>
        {aiAugmentationPages.slice(0, 6).map((p) => (
          <Link
            key={p.slug}
            href={`/library/ai-augmentation/${p.slug}`}
            className="text-steel hover:text-teal"
          >
            {p.model}
          </Link>
        ))}
        <span className="text-steel/50">+{aiAugmentationPages.length - 6} more</span>
      </div>

      {children}
    </div>
  );
}
