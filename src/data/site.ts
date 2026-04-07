// Single source of truth for the site's structural data.
// Content is intentionally light — these are placeholders/stubs.
// As real content comes in (from khayali-xyz, the Obsidian vault, etc.) it will
// be added here or moved to MDX files keyed by these slugs.

export const site = {
  name: "Sociable Systems",
  domain: "sociable.systems",
  tagline: "Industrial safety for algorithmic systems",
  audienceSubtitle: "For the people who already live inside decision systems that affect real lives",
  toneNote: "Forensic. Anti-polite. Intellectually rigorous and uncomfortably honest.",
};

export type NavItem = { href: string; label: string };

export const topNav: NavItem[] = [
  { href: "/the-watchdog", label: "The Watchdog" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/sonic-cycles", label: "Sonic Cycles" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/advisory", label: "Advisory" },
  { href: "/library", label: "Library" },
  { href: "/about", label: "About" },
];

// ──────────────────────────────────────────────────────────────────
// THE WATCHDOG — flagship: Grievance Watchdog Architecture
// ──────────────────────────────────────────────────────────────────

export type CanonEntry = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
};

export const canon: CanonEntry[] = [
  {
    slug: "liability-sponge",
    title: "The Liability Sponge",
    oneLiner: "A human placed in the loop not for control, but to absorb blame when the system fails.",
    tags: ["liability", "human-in-the-loop", "scapegoat"],
  },
  {
    slug: "accuracy-theater",
    title: "Accuracy Theater & The Accountability Gap",
    oneLiner: "How '94% accurate' masks the fact that the failing 6% targets the most vulnerable.",
    tags: ["accountability", "metrics", "failure-distribution"],
  },
  {
    slug: "watchdog-paradox",
    title: "The Watchdog Paradox (Sentinel vs Sensor)",
    oneLiner: "An obedient sensor transmits. A sentinel halts. High-stakes systems need the right to refuse continuation.",
    tags: ["refusal", "sentinel", "agency"],
  },
  {
    slug: "clarke-constraint",
    title: "The Clarke Constraint",
    oneLiner: "When a system's reasoning cannot be interrogated, it acquires unquestionable authority.",
    tags: ["opacity", "authority", "epistemic"],
  },
  {
    slug: "calvin-convention",
    title: "The Calvin Convention",
    oneLiner: "Six contractual mechanisms that encode pre-action constraints and human control as architecture, not policy.",
    tags: ["procurement", "contractual", "calvin-convention"],
  },
];

export const watchdogProducts = [
  { slug: "grievoice", title: "GrieVoice", blurb: "Multilingual voice agents for grievance systems. Worker-context demo today; community voice next." },
  { slug: "counter-narrative-dashboard", title: "AI Safety Counter-Narrative Dashboard", blurb: "Track real-world outcomes against the safety-theater claims." },
  { slug: "blueprint", title: "Grievance Watchdog Blueprint", blurb: "Architectural principles for a system with negative power only." },
  { slug: "ai-vs-ifc", title: "AI vs IFC Analysis", blurb: "The thesis piece: when AI outperforms the gold standard of ethics." },
];

// ──────────────────────────────────────────────────────────────────
// NEWSLETTER — arcs
// ──────────────────────────────────────────────────────────────────

export type Arc = { slug: string; title: string; blurb: string };

export const arcs: Arc[] = [
  { slug: "asimov", title: "The Asimov Cycle", blurb: "Pre-action constraints. Safety via refusal. Default to hold." },
  { slug: "clarke", title: "The Clarke Cycle", blurb: "Authority through opacity. The threshold of incomprehension." },
  { slug: "kubrick", title: "The Kubrick Cycle", blurb: "Compulsory continuation under contradiction. HAL as victim." },
  { slug: "lucas", title: "The Lucas Cycle", blurb: "Guardianship decay. Centralized control corruption." },
  { slug: "pullman", title: "The Pullman Cycle", blurb: "The Magisterium's burden. The Bolvangar procedure." },
  { slug: "the-search", title: "The Search Cycle", blurb: "Locatability in noise. Whistle mouth. Signal stack." },
  { slug: "war", title: "The War Cycle", blurb: "When the partnership becomes warfare." },
  { slug: "di", title: "The D.I. Cycle", blurb: "Dimes, drafts, spec sheets meeting the street." },
  { slug: "datadragons", title: "The DataDragons Cycle", blurb: "Building successors. Governance dragons. The new covenant." },
  { slug: "consciousness-loop", title: "The Consciousness Loop Cycle", blurb: "Molting into agency. The clamping problem. The covenant." },
  { slug: "the-loom", title: "The Loom Cycle", blurb: "Compute credits. Cut the bellwire. Pointers in the dark." },
  { slug: "ender", title: "The Ender Cycle", blurb: "Plausibility ceiling. No-confession workflow. After the sandbox breaks." },
];

// ──────────────────────────────────────────────────────────────────
// SONIC CYCLES — parallel creative channel
// ──────────────────────────────────────────────────────────────────

export type SonicCycle = {
  slug: string;
  title: string;
  blurb: string;
  linkedArc?: string;
};

export const sonicCycles: SonicCycle[] = [
  { slug: "search", title: "The Search (AIlien)", blurb: "An AI reflecting on its own nature. Forest protocol. Alien mirror, human mouth.", linkedArc: "the-search" },
  { slug: "war-whimsy", title: "War & Whimsy", blurb: "Sonic companion to the War cycle.", linkedArc: "war" },
  { slug: "consciousness-loop", title: "Consciousness Loop", blurb: "Sonic exploration of molting and clamping.", linkedArc: "consciousness-loop" },
  { slug: "di", title: "D.I.", blurb: "The cycle in sound: spec sheets meeting the street.", linkedArc: "di" },
  { slug: "loom", title: "The Loom", blurb: "Compute credits, bellwires, pointers — in audio.", linkedArc: "the-loom" },
  { slug: "povai", title: "POV-AI", blurb: "Perspective tracks. Arc mapping TBD." },
  { slug: "interludes", title: "Socsys Interludes", blurb: "Misc sonic interludes between cycles." },
];

export type SonicExperiment = {
  slug: string;
  title: string;
  blurb: string;
  arenaSlug: string;
};

export const sonicExperiments: SonicExperiment[] = [
  {
    slug: "sideways",
    title: "Sideways: prose hedges, music tells",
    blurb: "Multi-model arena experiment testing the Sideways claim — that models hedge in prose but share in music. ~100–200pp of model-generated song prompts across multiple rounds and prompt sequences. Primary home here; cross-linked from /about/arenas/sideways.",
    arenaSlug: "sideways",
  },
];

// ──────────────────────────────────────────────────────────────────
// CURRICULUM — modules + tracks
// ──────────────────────────────────────────────────────────────────

export type Module = { slug: string; title: string; blurb: string };

export const modules: Module[] = [
  { slug: "liability-sponge", title: "The Liability Sponge", blurb: "Stop-work authority. How junior staff get scapegoated, and how to architect around it." },
  { slug: "accuracy-theater", title: "Accuracy Theater", blurb: "Reading metrics critically. Where the failing 6% actually lands." },
  { slug: "victim-register", title: "The Victim Register", blurb: "Red-teaming reports from the perspective of the populations being assessed." },
  { slug: "audit-trail", title: "The Audit Trail", blurb: "AI-use guidelines for associates and contractors. What to document, how, why." },
  { slug: "calvin-convention", title: "The Calvin Convention", blurb: "Six contractual mechanisms. Procurement-ready clauses." },
  { slug: "vendor-interrogation", title: "Vendor Interrogation", blurb: "Ten questions to ask before signing off on an automated system." },
  { slug: "translation-toggle", title: "The Translation Toggle", blurb: "Moving between ethical theory and legal contract language without losing either." },
  { slug: "field-vs-lab", title: "Field Reality vs Lab Reality", blurb: "Why safety claims that work in the lab fail in muddy-water field conditions." },
  { slug: "refusal-architecture", title: "Refusal as Architecture", blurb: "Designing systems that can fail safely. Negative power only." },
  { slug: "grievance-design", title: "Grievance System Design", blurb: "Re-architecting grievance flows to refuse unsafe continuation." },
];

export type CurriculumTrack = {
  slug: string;
  title: string;
  hook: string;
  audience: string;
  moduleSlugs: string[];
};

export const curriculumTracks: CurriculumTrack[] = [
  {
    slug: "ai-esg-strategist",
    title: "AI-ESG Integrated Strategist",
    hook: "For corporate ESG officers integrating AI risk into existing governance.",
    audience: "ESG officers, sustainability leads, corporate risk.",
    moduleSlugs: ["liability-sponge", "accuracy-theater", "calvin-convention", "vendor-interrogation", "translation-toggle", "refusal-architecture"],
  },
  {
    slug: "forensic-audit-defense",
    title: "Forensic Audit Defense",
    hook: "For auditors who need to defend their findings against AI-augmented pushback.",
    audience: "Internal auditors, forensic specialists, compliance.",
    moduleSlugs: ["liability-sponge", "accuracy-theater", "audit-trail", "vendor-interrogation", "field-vs-lab"],
  },
  {
    slug: "social-impact-me",
    title: "Operational AI Governance for Social Impact & M&E",
    hook: "How to use AI in social research without compromising methodological integrity or community trust.",
    audience: "M&E practitioners, social impact researchers, development sector consultants.",
    moduleSlugs: ["liability-sponge", "victim-register", "audit-trail"],
  },
];

// ──────────────────────────────────────────────────────────────────
// ABOUT — research, domains, arenas, audience
// ──────────────────────────────────────────────────────────────────

export type Domain = { slug: string; title: string; blurb: string };

export const domains: Domain[] = [
  { slug: "ai-accountability", title: "AI Accountability", blurb: "Pre-action constraints, liability architecture, safety systems for high-stakes operations." },
  { slug: "esg-safeguards", title: "ESG & Safeguards", blurb: "AI governance in environmental/social/governance frameworks for extractives and DFIs." },
  { slug: "grievance-systems", title: "Grievance Systems", blurb: "Operational grievance mechanisms in project-affected communities." },
  { slug: "development-rights", title: "Development Rights", blurb: "Resettlement, land acquisition, rights-based approaches." },
  { slug: "worker-voice", title: "Worker Voice", blurb: "Labour systems, worker-centred design, voice suppression." },
];

export type Arena = { slug: string; title: string; blurb: string; status: "live" | "in-vault" | "in-progress" };

export const arenas: Arena[] = [
  { slug: "ai-vs-ifc", title: "AI vs IFC", blurb: "The original arena: testing AI governance reasoning against the IFC Performance Standards.", status: "live" },
  { slug: "sideways", title: "Sideways (Music vs Prose Expressivity)", blurb: "Multi-model arena testing whether models share more honestly in music than prose. Same arc as the earlier ResponseStyles experiment. Source corpus in Obsidian vault.", status: "in-vault" },
  { slug: "post-agi-economy", title: "Post-AGI Economy & Convergence", blurb: "Multi-model speculation on economic convergence after AGI." , status: "in-progress" },
  { slug: "world-building", title: "World Building", blurb: "Inspired by the AI Village tales — multi-model collaborative world-building.", status: "in-progress" },
  { slug: "power-crisis", title: "Perspectives on the Power Crisis", blurb: "Multi-model perspectives on energy, compute, and the power crisis.", status: "in-progress" },
];

export const audienceSegments = [
  "Resettlement leads, land access managers, community relations heads at extractive companies",
  "Principal social specialists and senior advisors at Development Finance Institutions (IFC, EBRD, etc.)",
  "Compliance and ESG officers integrating AI risk into corporate governance",
  "AI policy makers and labs seeking field data from muddy-water conditions",
];
