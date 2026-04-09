// Library artifact slug → PDF filename in /public/downloads/
// Filenames match what was migrated from khayali-xyz/public/downloads/.

export type ArtifactFile = {
  slug: string;
  title: string;
  blurb: string;
  kind: string;
  file?: string; // path under /public
};

export const libraryFiles: ArtifactFile[] = [
  { slug: "vendor-interrogation", title: "Vendor Interrogation Script", blurb: "Ten questions a manager must ask before signing off on an automated grievance or risk management system.", kind: "PDF · 1 page", file: "/downloads/vendor_interrogation_script.pdf" },
  { slug: "calvin-convention-narrative", title: "The Calvin Convention (narrative)", blurb: "Narrative framing of the six mechanisms. For leadership buy-in.", kind: "PDF", file: "/downloads/calvin-convention-narrative.pdf" },
  { slug: "calvin-convention-contractual", title: "The Calvin Convention (contractual)", blurb: "Six contractual mechanisms with actual clause language. Ready for vendor contracts.", kind: "PDF", file: "/downloads/calvin-convention-contractual.pdf" },
  { slug: "architecture-of-refusal", title: "The Architecture of Refusal", blurb: "Designing systems that can fail safely. Negative power only.", kind: "PDF", file: "/downloads/architecture-of-refusal.pdf" },
  { slug: "constitutional-engine", title: "The Constitutional Engine", blurb: "Pre-action constraints as system architecture.", kind: "PDF", file: "/downloads/constitutional-engine.pdf" },
  { slug: "industrial-safety-architecture", title: "Industrial Safety Architecture", blurb: "Applying industrial-safety principles to algorithmic systems.", kind: "PDF", file: "/downloads/industrial-safety-architecture.pdf" },
  { slug: "ai-vs-ifc-executive", title: "AI vs IFC — Executive Extract", blurb: "Arena-derived analysis: when AI outperforms the gold standard of ethics.", kind: "PDF", file: "/downloads/ai-vs-ifc-executive-extract.pdf" },
  { slug: "ai-vs-ifc-technical", title: "AI vs IFC — Technical Companion", blurb: "Technical details behind the executive extract.", kind: "PDF", file: "/downloads/ai-vs-ifc-technical-companion.pdf" },
  { slug: "human-in-the-loop-not-enough", title: "Why 'Human in the Loop' Is Not Enough", blurb: "A guide to safer AI systems.", kind: "PDF", file: "/downloads/human-in-the-loop-not-enough.pdf" },
  { slug: "bending-ai-truth", title: "Bending AI Truth", blurb: "On accuracy theater and structural dishonesty.", kind: "PDF", file: "/downloads/Bending_AI_Truth.pdf" },
  { slug: "appendix-a-right-of-override", title: "Appendix A — Right of Override", blurb: "Operational appendix to the Calvin Convention.", kind: "PDF", file: "/downloads/Appendix_A_Right_of_Override.pdf" },
  { slug: "appendix-b-edgecase-registry", title: "Appendix B — Edge Case Registry", blurb: "Operational appendix to the Calvin Convention.", kind: "PDF", file: "/downloads/Appendix_B_EdgeCase_Registry.pdf" },
  { slug: "appendix-c-right-of-refusal", title: "Appendix C — Right of Refusal", blurb: "Operational appendix to the Calvin Convention.", kind: "PDF", file: "/downloads/Appendix_C_Right_of_Refusal.pdf" },
  { slug: "dragon-data-intro", title: "Dragon Data — Introduction", blurb: "Opening the DataDragons arc: why MERGE creates fog.", kind: "PDF", file: "/downloads/DragonDataIntro.pdf" },
  { slug: "dragon-id-kit", title: "Data Dragon ID Kit", blurb: "Field-kit for identifying species of data dragons in the wild.", kind: "PDF", file: "/downloads/Data Dragon ID Kit.pdf" },
  { slug: "foundation-data-decay", title: "Foundation: Data Decay", blurb: "On what rots, and what the decay actually does to the system above it.", kind: "PDF", file: "/downloads/Foundation_DataDecay.pdf" },
];

export function getArtifact(slug: string): ArtifactFile | undefined {
  return libraryFiles.find((a) => a.slug === slug);
}
