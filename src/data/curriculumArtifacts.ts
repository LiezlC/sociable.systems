// Curriculum artifacts — standalone HTML pages served from /public,
// now wired into the site via /curriculum/artifacts/ routes.
//
// Grouped by category for the hub page; flat slug list for routing.

export type CurriculumArtifact = {
  slug: string;
  title: string;
  description: string;
  file: string; // path relative to /public
  category: CurriculumArtifactCategory;
};

export type CurriculumArtifactCategory =
  | "syllabus"
  | "level"
  | "module"
  | "partnership"
  | "reference"
  | "infographic";

export const categoryLabels: Record<CurriculumArtifactCategory, string> = {
  syllabus: "Syllabus & Overviews",
  level: "Training Levels (0 \u2192 6)",
  module: "Specialised Modules",
  partnership: "Partnership & Skills Training",
  reference: "Conceptual & Reference",
  infographic: "Infographics & Visual Artifacts",
};

// Ordered: the order within each category is the intended reading sequence.
export const curriculumArtifacts: CurriculumArtifact[] = [
  // ── Syllabus & Overviews ──────────────────────────────────────
  {
    slug: "syllabus-overview",
    title: "AI-ESG Syllabus Overview",
    description: "Complete curriculum overview with all levels and modules — tabbed navigation.",
    file: "/artifacts/curriculum/AI-ESG_Syllabus_Overview.html",
    category: "syllabus",
  },
  {
    slug: "syllabus-executive",
    title: "AI-ESG Executive Overview",
    description: "High-level summary of the AI-ESG curriculum for leadership buy-in.",
    file: "/artifacts/curriculum/AI-ESG_Syllabus_Executive_Overview.html",
    category: "syllabus",
  },
  {
    slug: "syllabus-k2-z47",
    title: "AI-ESG Syllabus (K2 Z47)",
    description: "Full curriculum with tabbed navigation — the Grand Opus V13.",
    file: "/artifacts/curriculum/AI-ESG_Syllabus_K2_Z47.html",
    category: "syllabus",
  },
  {
    slug: "artifacts-index",
    title: "Artifact Templates & Guides Index",
    description: "Comprehensive index of all AI-ESG governance artifacts and templates.",
    file: "/artifacts/curriculum/Artifacts_Index.html",
    category: "syllabus",
  },
  {
    slug: "curriculum-index",
    title: "Curriculum Hub (HTML)",
    description: "Original HTML hub linking all curriculum modules and levels.",
    file: "/artifacts/curriculum/index.html",
    category: "syllabus",
  },
  {
    slug: "facilitator-matrix",
    title: "Facilitator Deployment Matrix",
    description: "Guide for facilitators deploying the curriculum (Z47 matrix).",
    file: "/artifacts/curriculum/AI-ESG_Facilitator_Deployment_Matrix.html",
    category: "syllabus",
  },

  // ── Training Levels ───────────────────────────────────────────
  {
    slug: "level-0",
    title: "Level 0: Constitutional Foundations",
    description: "Foundational module — constitutional and ethical frameworks for AI governance.",
    file: "/artifacts/curriculum/AI-ESG_Level0_Constitutional_Foundations.html",
    category: "level",
  },
  {
    slug: "level-0-5",
    title: "Level 0.5: Framing the Relationship",
    description: "Establishing the relationship between AI systems and ESG governance.",
    file: "/artifacts/curriculum/AI-ESG_Level0.5_Framing_the_Relationship.html",
    category: "level",
  },
  {
    slug: "level-1",
    title: "Level 1: Epistemic Failures",
    description: "Knowledge and reasoning failures in AI systems — where the models break.",
    file: "/artifacts/curriculum/AI-ESG_Level1_Epistemic_Failures.html",
    category: "level",
  },
  {
    slug: "level-2",
    title: "Level 2: Architecture of Compliance",
    description: "Technical compliance architecture for AI governance systems.",
    file: "/artifacts/curriculum/AI-ESG_Level2_Architecture_Compliance.html",
    category: "level",
  },
  {
    slug: "level-3",
    title: "Level 3: The Lucas Cycle",
    description: "Guardianship decay — centralised control corruption in governance.",
    file: "/artifacts/curriculum/AI-ESG_Level3_Lucas_Cycle.html",
    category: "level",
  },
  {
    slug: "level-4",
    title: "Level 4: The Pullman Cycle",
    description: "The Magisterium's burden — institutional governance frameworks.",
    file: "/artifacts/curriculum/AI-ESG_Level4_Pullman_Cycle.html",
    category: "level",
  },
  {
    slug: "level-5",
    title: "Level 5: The Kubrick Cycle",
    description: "Systems that cannot stop — compulsory continuation under contradiction.",
    file: "/artifacts/curriculum/AI-ESG_Level5_Kubrick_Cycle.html",
    category: "level",
  },
  {
    slug: "level-6",
    title: "Level 6: Forensic Domains",
    description: "Forensic analysis and audit domains for AI governance.",
    file: "/artifacts/curriculum/AI-ESG_Level6_Forensic_Domains.html",
    category: "level",
  },

  // ── Specialised Modules ───────────────────────────────────────
  {
    slug: "h8p-continuous-governance",
    title: "Humans in the H\u221EP",
    description: "Module on continuous governance with human oversight — the H\u221EP model.",
    file: "/artifacts/curriculum/AI-ESG_Module_H8P_Continuous_Governance.html",
    category: "module",
  },
  {
    slug: "capstone-audit-defense",
    title: "Capstone: Audit Defense",
    description: "Capstone module — audit defense and governance implementation.",
    file: "/artifacts/curriculum/AI-ESG_Capstone_Audit_Defense.html",
    category: "module",
  },

  // ── Partnership & Skills Training ─────────────────────────────
  {
    slug: "challenge-engine-config",
    title: "AEIS Challenge Engine",
    description: "Challenge-based learning engine for partnership skills in AI governance.",
    file: "/artifacts/curriculum/AEIS_Challenge_Engine_Config_Hub.html",
    category: "partnership",
  },
  {
    slug: "partnership-challenge-engine",
    title: "Partnership Challenge Engine",
    description: "Training engine for human-AI collaboration skills.",
    file: "/artifacts/curriculum/Partnership_Challenge_Engine.html",
    category: "partnership",
  },
  {
    slug: "partnership-skills",
    title: "Partnership Skills Framework",
    description: "Competency framework for human-AI partnership skills.",
    file: "/artifacts/curriculum/Partnership_Skills_Framework.html",
    category: "partnership",
  },
  {
    slug: "vibecode-challenger",
    title: "VibeCoder Challenge Engine",
    description: "Challenge-based training interface for partnership skills.",
    file: "/artifacts/curriculum/VibeCodeChallenger.html",
    category: "partnership",
  },

  // ── Conceptual & Reference ────────────────────────────────────
  {
    slug: "scifi-rosetta-stone",
    title: "Sci-Fi to Governance Rosetta Stone",
    description: "Maps sci-fi governance concepts to real AI governance frameworks.",
    file: "/artifacts/curriculum/Sci-Fi_Governance_Rosetta_Stone.html",
    category: "reference",
  },
  {
    slug: "humanhoop",
    title: "Humans in the H\u221EP: The New AI Labour Model",
    description: "Detailed model for continuous human oversight in AI operations.",
    file: "/artifacts/curriculum/humanhoop.html",
    category: "reference",
  },
  {
    slug: "ai-ensemble",
    title: "Why Not Just Yes? The Case for the AI Ensemble",
    description: "Conceptual framework for ensemble AI approaches to governance.",
    file: "/artifacts/curriculum/AI_Ensemble.html",
    category: "reference",
  },

  // ── Infographics & Visual Artifacts ───────────────────────────
  {
    slug: "si-me-modules",
    title: "Social Impact & M&E Track",
    description: "Social Impact and Monitoring & Evaluation module structures.",
    file: "/curriculum/si_me_modules.html",
    category: "infographic",
  },
  {
    slug: "isas-infographic",
    title: "Industrial Safety Architecture for Systems",
    description: "Visual infographic of Sociable Systems architecture and ISAS framework.",
    file: "/curriculum/isas-infog.html",
    category: "infographic",
  },
  {
    slug: "ai-governance-divide",
    title: "The Global AI Governance Divide",
    description: "Comparative infographic — Western vs Global South AI governance approaches.",
    file: "/InfographicTheGlobalAIGovernanceDivide.html",
    category: "infographic",
  },
  {
    slug: "esg-landscape",
    title: "AI & ESG in Extractive Industries",
    description: "Interactive exploration of AI-ESG applications in mining and extractive industries.",
    file: "/artifacts/esg-landscape.html",
    category: "infographic",
  },
  {
    slug: "isas-architecture",
    title: "Sociable Systems Architecture",
    description: "Systems architecture visualisation and documentation.",
    file: "/artifacts/isas.html",
    category: "infographic",
  },
  {
    slug: "si-me-framework",
    title: "Social Impact & M&E Framework",
    description: "Social impact measurement and evaluation framework.",
    file: "/artifacts/si-me.html",
    category: "infographic",
  },
  {
    slug: "comparative-analysis",
    title: "20 AI Models on Post-AGI Economic Theory",
    description: "Comparative analysis of 20 AI models reasoning about post-AGI economics.",
    file: "/artifacts/comparative_analysis.html",
    category: "infographic",
  },
];
