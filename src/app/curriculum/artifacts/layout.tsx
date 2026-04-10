import Link from "next/link";
import { curriculumArtifacts, categoryLabels, type CurriculumArtifactCategory } from "@/data/curriculumArtifacts";

// Show one representative link per category in the sub-nav
const categoryOrder: CurriculumArtifactCategory[] = [
  "syllabus", "level", "module", "partnership", "reference", "infographic",
];

export default function CurriculumArtifactsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 font-mono text-xs text-steel flex items-center gap-1">
        <Link href="/curriculum" className="underline underline-offset-4">
          Curriculum
        </Link>
        <span>/</span>
        <Link href="/curriculum/artifacts" className="underline underline-offset-4">
          Artifacts
        </Link>
      </nav>

      {/* Section sub-nav — category anchors */}
      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm border-b border-teal/20 pb-4">
        <Link href="/curriculum/artifacts" className="text-teal font-medium hover:text-teal-dark">
          All Artifacts
        </Link>
        {categoryOrder.map((cat) => (
          <Link
            key={cat}
            href={`/curriculum/artifacts#${cat}`}
            className="text-steel hover:text-teal"
          >
            {categoryLabels[cat]}
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
}
