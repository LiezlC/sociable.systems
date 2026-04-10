import Link from "next/link";
import {
  curriculumArtifacts,
  categoryLabels,
  type CurriculumArtifactCategory,
} from "@/data/curriculumArtifacts";

export const metadata = { title: "Curriculum Artifacts" };

const categoryOrder: CurriculumArtifactCategory[] = [
  "syllabus", "level", "module", "partnership", "reference", "infographic",
];

export default function CurriculumArtifactsHub() {
  return (
    <>
      <header className="mb-10 border-b border-ink/10 pb-8">
        <div className="text-xs uppercase tracking-widest text-rust mb-2">Curriculum</div>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
          Artifacts &amp; Resources
        </h1>
        <p className="mt-4 text-lg text-steel max-w-3xl">
          The full corpus of curriculum materials — syllabi, training levels, partnership
          engines, reference docs, and infographics. Each opens within the site so you
          can navigate back here.
        </p>
      </header>

      {categoryOrder.map((cat) => {
        const items = curriculumArtifacts.filter((a) => a.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} id={cat} className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-2xl mb-2">{categoryLabels[cat]}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map((a) => (
                <Link
                  key={a.slug}
                  href={`/curriculum/artifacts/${a.slug}`}
                  className="block border border-ink/10 hover:border-teal/50 p-5 rounded-sm transition-colors no-underline"
                >
                  <div className="font-serif text-lg leading-snug">{a.title}</div>
                  <p className="mt-2 text-sm text-steel">{a.description}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
