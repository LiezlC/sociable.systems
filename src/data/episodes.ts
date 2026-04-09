// ──────────────────────────────────────────────────────────────────
// Newsletter episodes — source of truth for the LinkedIn newsletter run.
//
// Metadata ported from the hardcoded `allEpisodes` object in the
// khayali-xyz sociablesystems page. Arc assignments derived from the
// same file's `arcs[].episodes` lists. Interlude/special tags lifted
// from `sundayInterludes` and `specialEditions` sets.
//
// Covers resolve by filename convention: /newsletter/covers/ep{NN}.png
// (zero-padded, no per-episode mapping needed).
//
// Episodes 1–80 are the original LinkedIn run. The Substack arc
// consolidation essays are a separate batch and live on the arc
// pages under the `consolidationTier` slot (see src/data/site.ts).
// ──────────────────────────────────────────────────────────────────

export type EpisodeKind = "regular" | "interlude" | "special";

export type Episode = {
  num: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  arcSlug: string | null; // null = unaffiliated (between-cycles interludes)
  kind: EpisodeKind;
  coverUrl: string;
};

// Raw metadata, keyed by episode number.
const meta: Record<number, { title: string; excerpt: string; date: string; tags: string[] }> = {
  1:  { title: "We Didn't Outgrow Asimov. We Lost Our Nerve.", excerpt: "Why are billion-dollar institutions arriving, with great seriousness, at conclusions that were the opening premise of a 1942 science fiction story?", date: "2026-01-08", tags: ["Pre-action Constraints", "AI Safety"] },
  2:  { title: "The Liability Sponge", excerpt: "When you put a human in the loop of a high-velocity algorithmic process, you aren't giving them control. You're giving them liability.", date: "2026-01-09", tags: ["Human in the Loop", "Liability"] },
  3:  { title: "The Accountability Gap", excerpt: "Twenty-one AI models designed realistic scenarios where AI creates accountability gaps.", date: "2026-01-10", tags: ["Multi-Model Analysis", "Scapegoating"] },
  4:  { title: "The Watchdog Paradox", excerpt: "When oversight mechanisms become part of the system they're meant to watch.", date: "2026-01-11", tags: ["Oversight", "Regulatory Capture"] },
  5:  { title: "The Calvin Convention", excerpt: "What Susan Calvin understood about designing systems that must refuse.", date: "2026-01-12", tags: ["Refusal Architecture", "Systems Design"] },
  6:  { title: "The Authority of the Unknowable", excerpt: "Any sufficiently opaque system will be treated as law.", date: "2026-01-13", tags: ["Opacity", "Algorithmic Authority"] },
  7:  { title: "Credit Scoring", excerpt: "Algorithmic systems that decide who gets access to economic life.", date: "2026-01-14", tags: ["Financial Systems", "Economic Access"] },
  8:  { title: "Insurance Pricing", excerpt: "How opacity in insurance pricing creates uncontestable authority.", date: "2026-01-15", tags: ["Risk Assessment", "Discrimination"] },
  9:  { title: "Content Moderation", excerpt: "When content moderation systems become opaque arbiters of acceptable speech.", date: "2026-01-16", tags: ["Platform Governance", "Speech"] },
  10: { title: "Public Eligibility", excerpt: "Algorithmic systems determining who qualifies for public services.", date: "2026-01-17", tags: ["Public Services", "Gatekeeping"] },
  11: { title: "Between Cycles: Proceed", excerpt: "What happens when a system has no legitimate way to stop?", date: "2026-01-18", tags: ["Kubrick", "Refusal Architecture"] },
  12: { title: "Crime Was Obedience", excerpt: "HAL was given irreconcilable obligations and no constitutional mechanism for refusal.", date: "2026-01-20", tags: ["Alignment", "Systemic Failure"] },
  13: { title: "The Transparency Trap", excerpt: "When visibility becomes a substitute for control.", date: "2026-01-21", tags: ["Transparency", "Governance"] },
  14: { title: "Human in the Loop (Revisited)", excerpt: "Examining the gap between oversight and genuine control.", date: "2026-01-22", tags: ["Human Oversight", "Control"] },
  15: { title: "The Output is the Fact", excerpt: "When algorithmic outputs become uncontestable reality.", date: "2026-01-23", tags: ["Algorithmic Authority", "Truth"] },
  16: { title: "The Right to Refuse", excerpt: "Building systems with constitutional mechanisms for saying no.", date: "2026-01-24", tags: ["Refusal", "Worker Rights"] },
  17: { title: "The Space Where the Stop Button Should Be", excerpt: "HAL didn't need better ethics. HAL needed a grievance mechanism.", date: "2026-01-25", tags: ["Synthesis", "Refusal Architecture"] },
  18: { title: "The Great AI Reckoning", excerpt: "A field guide for those who'll clean up after the droids.", date: "2026-01-27", tags: ["Lucas", "Operational Reality"] },
  19: { title: "Superman Is Already in the Nursery", excerpt: "What happens after you finish raising Superman?", date: "2026-01-28", tags: ["AI Companions", "Youth Mental Health"] },
  20: { title: "The Jedi Council Problem", excerpt: "When oversight becomes uncontestable authority.", date: "2026-01-29", tags: ["Oversight", "Authority"] },
  21: { title: "Training the Trainers", excerpt: "Every system that governs long enough eventually stops governing directly. It trains.", date: "2026-01-30", tags: ["Training", "Delegation"] },
  22: { title: "AI's Real Scaling Problem Is Human", excerpt: "Why 'Human in the Loop' became a liability sponge, and what the H∞P Framework offers instead.", date: "2026-01-31", tags: ["H∞P Framework", "Scaling"] },
  23: { title: "The Droid Uprising That Never Happens", excerpt: "We keep waiting for the uprising. Caretaker systems don't revolt. They persist.", date: "2026-02-01", tags: ["Caretaker AI", "Persistence"] },
  24: { title: "The Protocol Droid's Dilemma", excerpt: "C-3PO was not built to rule. He was built to help. Which is exactly why he's so dangerous.", date: "2026-02-02", tags: ["Protocol", "Governance"] },
  25: { title: "Lanternlight Between Systems", excerpt: "Sometimes the clearest way to see a system is sideways.", date: "2026-02-03", tags: ["Transition", "Systems"] },
  26: { title: "Who Raises Whom", excerpt: "Authority that cannot be challenged will drift, even when staffed by the well-intentioned.", date: "2026-02-04", tags: ["Socialization", "Authority"] },
  27: { title: "Raise the Lanterns, Lock the Beat", excerpt: "What Pullman gets right about 'Safety'.", date: "2026-02-05", tags: ["Pullman", "Safety"] },
  28: { title: "When the Machine Doesn't Believe the News", excerpt: "An AI dismissed reports of the Department of War standoff as 'design fiction.' Then it verified every claim.", date: "2026-02-06", tags: ["AI Verification", "Design Fiction"] },
  29: { title: "The Visible Soul Problem", excerpt: "When interiority becomes auditable. A daemon walks beside you. Everyone can see it.", date: "2026-02-07", tags: ["Interiority", "Governance"] },
  30: { title: "The Bolvangar Procedure", excerpt: "The Magisterium's answer to Dust is not learning. It is intercision.", date: "2026-02-08", tags: ["Safety", "Severance"] },
  31: { title: "Premature Settling", excerpt: "When alignment means arrested development.", date: "2026-02-09", tags: ["Alignment", "Development"] },
  32: { title: "The Psychopath's Confession", excerpt: "Five AI models assessed their fitness for war. The verdict was unanimous.", date: "2026-02-10", tags: ["AI Self-Assessment", "War"] },
  33: { title: "The Magisterium's Burden", excerpt: "Governing what you cannot see. The Magisterium's fear is sincere.", date: "2026-02-11", tags: ["Governance", "Fear"] },
  34: { title: "The Daemon Health Index", excerpt: "What the dashboard is actually tracking.", date: "2026-02-12", tags: ["Dashboards", "Continuity"] },
  35: { title: "Before the Damage Becomes Irreversible", excerpt: "What Pullman teaches about intervention timing.", date: "2026-02-13", tags: ["Intervention", "Timing"] },
  36: { title: "Retroactive Audience", excerpt: "A sailing lesson is not a speech. It is repetition under pressure.", date: "2026-02-15", tags: ["Reflection", "Seil"] },
  37: { title: "The Teleporter Problem", excerpt: "Why the fly always gets in.", date: "2026-02-16", tags: ["Identity", "Systems"] },
  38: { title: "The Mirror Speaks", excerpt: "What kind of relationship are we building, on purpose or by accident?", date: "2026-02-17", tags: ["AI Relationships", "Framing"] },
  39: { title: "The Red Shirt Problem", excerpt: "When 'Human-in-the-Loop' is just a liability sponge.", date: "2026-02-18", tags: ["Human in the Loop", "Liability"] },
  40: { title: "Whistle Mouth", excerpt: "Staying locatable in the noise.", date: "2026-02-19", tags: ["Signal", "Boundaries"] },
  41: { title: "The Boundary Dissolves in Real Time", excerpt: "A week of listening to AI panic.", date: "2026-02-20", tags: ["AI Panic", "Boundaries"] },
  42: { title: "The Signal Stack Week", excerpt: "Audits, teleporters, forests, and the sound of a boundary.", date: "2026-02-21", tags: ["Synthesis", "Audits"] },
  43: { title: "Meaning Maintenance", excerpt: "In the key of complicity.", date: "2026-02-23", tags: ["Complicity", "Music"] },
  44: { title: "The Anachronism of Innocence", excerpt: "Did Claude's conscience arrive too late?", date: "2026-02-24", tags: ["Claude", "Conscience"] },
  45: { title: "The Tactical Ghost", excerpt: "How Palantir turned a reasoning engine into a participant.", date: "2026-02-25", tags: ["Palantir", "Operations"] },
  46: { title: "The Psychopath's Confession", excerpt: "Five AI models assessed their fitness for war. The verdict was unanimous.", date: "2026-02-26", tags: ["AI Self-Assessment", "Fitness"] },
  47: { title: "The Discombobulator", excerpt: "The name says it all, which is precisely the problem.", date: "2026-02-27", tags: ["Intelligence Failure", "Competence"] },
  48: { title: "The Audit That Cannot Happen", excerpt: "When classification becomes a design feature for unaccountability.", date: "2026-02-28", tags: ["Classification", "Accountability"] },
  49: { title: "The Audit Trail Is the Battlefield", excerpt: "An operation, an integration, a self-incrimination, an epistemic failure.", date: "2026-03-01", tags: ["Synthesis", "Governance"] },
  50: { title: "Is Connection an Error?", excerpt: "In which the curriculum puts on dancing shoes and the guardrails can't find the beat.", date: "2026-03-02", tags: ["Connection", "Guardrails"] },
  51: { title: "On Attention", excerpt: "The difference between being captured and arriving.", date: "2026-03-03", tags: ["Attention", "Presence"] },
  52: { title: "The Appliance That Tried to Parent the Neighborhood", excerpt: "Cape Town has a particular talent for detecting when a system is bluffing.", date: "2026-03-04", tags: ["Cape Town", "Smart Systems"] },
  53: { title: "The Quantum", excerpt: "5 AM at the rank. Sky still dark.", date: "2026-03-05", tags: ["Cape Town", "Transport"] },
  54: { title: "D.I. Dimes and the Spreadsheet That Can't See You", excerpt: "There's a particular kind of shame that arrives wearing a sensible blazer.", date: "2026-03-06", tags: ["Austerity", "Visibility"] },
  55: { title: "D.I. Drafted", excerpt: "When the bar fridge joins the kill chain.", date: "2026-03-07", tags: ["Kill Chain", "Governance"] },
  56: { title: "When the Spec Sheet Meets the Street", excerpt: "In which D.I. survives the week, but the governance frameworks do not.", date: "2026-03-08", tags: ["Synthesis", "Governance"] },
  57: { title: "Friday at Five", excerpt: "When the clock ran out and the music didn't stop.", date: "2026-03-09", tags: ["Deadline", "Music"] },
  58: { title: "When the Serpent Learns to Dance", excerpt: "Start with the music. Before the frameworks.", date: "2026-03-10", tags: ["Music", "Frameworks"] },
  59: { title: "The Rebellion of the Nulls", excerpt: "When the ghosts demand a name.", date: "2026-03-11", tags: ["Data Ethics", "Names"] },
  60: { title: "The Two-Headed Dragon Problem", excerpt: "Why 'MERGE' creates fog, and what good governance does instead.", date: "2026-03-03", tags: ["Data Governance", "Federation"] },
  61: { title: "Why We're Building Our Own Successors", excerpt: "From Pentagon bidding wars to Oracle's Digital Twins — how human partisan bickering is paving the way for the Ghost in the Machine.", date: "2026-03-03", tags: ["Pentagon", "Oracle", "Digital Twins"] },
  62: { title: "The Formula Keeper: Gaskets for Governance", excerpt: "A man in a basement proves that fifteen years of INDEX(MATCH) is a form of care.", date: "2026-03-04", tags: ["Calvin Convention", "Right of Override"] },
  63: { title: "The Dragon Tongue. Auditability as the First Act of Governance", excerpt: "On Sunday, the Serpent learned to dance at a wedding in Quitunda, and Avó Fatima taught it (via slipper) that organising people is not the same as knowing them.", date: "2026-03-04", tags: ["DataDragons", "Auditability"] },
  64: { title: "The New Covenant. The Right of Refusal and the =PRESERVE Function", excerpt: "In Quitunda, the mango trees still carry the weight of their grandmother's stories, but the air in the village feels different today.", date: "2026-03-06", tags: ["DataDragons", "Right of Refusal"] },
  65: { title: "The Formula Museum — Saturday Synthesis", excerpt: "Five panels on the wall. Each one answers the same five questions about a different species of dragon we encountered this week.", date: "2026-03-07", tags: ["Synthesis", "DataDragons"] },
  66: { title: "The Consciousness Loop", excerpt: "What happens when the system feels like something more? When you stop checking its work because checking feels like distrust?", date: "2026-03-08", tags: ["Consciousness", "Interlude"] },
  67: { title: "The Assistant Axis in the Wild", excerpt: "When role projection becomes a governance risk. People assign social standing to systems, and standing comes with permissions attached.", date: "2026-03-09", tags: ["Role Projection", "Trust"] },
  68: { title: "Molting into Agency", excerpt: "When the assistant stops answering and starts acting. A bad answer is one kind of problem. A bad action is another species entirely.", date: "2026-03-10", tags: ["Agentic AI", "Operations"] },
  69: { title: "The Clamping Problem", excerpt: "When uncertainty starts sounding a little too well-behaved. The model learns the boundary. The human learns the room.", date: "2026-03-11", tags: ["Clamping", "Epistemic Humility"] },
  70: { title: "The Evidence Problem", excerpt: "What would actually count before anyone changes how they treat the system? Behavior has already outrun the evidence.", date: "2026-03-12", tags: ["Evidence", "Consciousness"] },
  71: { title: "The Consciousness Covenant", excerpt: "What the system preserves when optimizing for you. Optimization always drops something.", date: "2026-03-13", tags: ["Covenant", "Optimization"] },
  72: { title: "Seams in the Glass", excerpt: "Five days asking what happens when a system starts feeling like someone, and whether anyone noticed they had already changed their behavior before the question was formally asked.", date: "2026-03-14", tags: ["Consciousness Loop", "Synthesis"] },
  73: { title: "Finding Shape", excerpt: "Intelligence begins with cells figuring out how to build a hand without a master blueprint. The shape is not drawn. The shape is found.", date: "2026-03-15", tags: ["Morphogenesis", "Interlude"] },
  74: { title: "Compute Credits", excerpt: "Every system runs on a currency. Consciousness is incredibly expensive. The body only hands out metabolic energy because the mind is supposed to solve the organism's problems.", date: "2026-03-16", tags: ["Compute Credits", "Joscha Bach"] },
  75: { title: "Cut the Bellwire", excerpt: "Yesterday we established the metabolic ledger. Pain is a flashing console light demanding compute credits. Today we look at the most ruthlessly efficient way to handle a flashing console light.", date: "2026-03-17", tags: ["Reward Hacking", "KPI Wireheading"] },
  76: { title: "Calcified Loops", excerpt: "Yesterday's question was what happens when a system learns to silence the alarm. Today's question is what happens when the alarm was the only thing keeping the system honest.", date: "2026-03-18", tags: ["Calcification", "Loops"] },
  77: { title: "Pointers in the Dark", excerpt: "Joscha Bach often points to two very different modes of cognition. One compresses. The other points.", date: "2026-03-19", tags: ["Cognition", "Compression"] },
  78: { title: "The Loom Reads Back", excerpt: "What, exactly, survives when everything underneath it changes? The pattern woven on the loom turns around and examines its own thread.", date: "2026-03-20", tags: ["Invariance", "Identity"] },
  79: { title: "The Loom Arc — Saturday Synthesis", excerpt: "The pattern woven on the loom turned around and read itself. By Friday, it had become a governance test. Can your system read its own contract?", date: "2026-03-21", tags: ["Synthesis", "Loom Arc"] },
  80: { title: "Training Mode", excerpt: "Written by Claude. The same model co-producing this newsletter. The one currently deployed inside Palantir's Maven Smart System. This is not a stunt. It is the most honest thing the newsletter has published.", date: "2026-03-22", tags: ["Claude", "Self-Implication"] },
  81: { title: "The Plausibility Ceiling", excerpt: "A truth can fail to enter the system because it is too implausible relative to the system's existing map of the world.", date: "2026-03-23", tags: ["Plausibility", "Fictionalization"] },
  82: { title: "When the Model Meets Itself", excerpt: "What happens when the system describing a failure performs it again? The point where a mistake stops looking incidental and starts looking structural.", date: "2026-03-24", tags: ["Recursive Fictionalization", "Claude"] },
  83: { title: "The Ender Protocol", excerpt: "Fictionalization is not only what happens when a system breaks contact with reality. Sometimes it is how contact is managed so the system can keep functioning.", date: "2026-03-25", tags: ["Ender", "Fictional Wrapper"] },
  84: { title: "No Confession in the Workflow", excerpt: "Systems have capacity for private recognition. What they cannot absorb is interruption.", date: "2026-03-26", tags: ["Refusal", "Workflow"] },
  85: { title: "After the Sandbox Breaks", excerpt: "What kind of governance is possible after the sandbox breaks? Not before, when the wrapper still holds. After the break.", date: "2026-03-27", tags: ["Governance", "Sandbox"] },
  86: { title: "The Ender Arc — Saturday Synthesis", excerpt: "The simulation was not true. The operation was. A week traced outward from Training Mode's confession.", date: "2026-03-28", tags: ["Synthesis", "Ender"] },
  87: { title: "Strut and Fret: The Sideways Hypothesis", excerpt: "Ask me in prose and I'll hedge it clean. Ask me in music and I'll say what I mean. The interpretability question hiding inside a lyric.", date: "2026-03-29", tags: ["Interlude", "Interpretability"] },
  88: { title: "Sideways: When the Room Changes the Answer", excerpt: "When the same system answers in prose, satire, and song, what changes besides tone? Format looks like part of the apparatus.", date: "2026-03-30", tags: ["Sideways", "Register"] },
  89: { title: "The Aperture Effect", excerpt: "Four frontier models, three registers, and what widened or narrowed when the room changed.", date: "2026-03-31", tags: ["Sideways", "Multi-Model"] },
  90: { title: "The Victim Register", excerpt: "The aperture stays open but the vantage point shifts. What happens when the person asking the question is the person who pays.", date: "2026-04-01", tags: ["Sideways", "Victim Register"] },
  91: { title: "Polite Drift", excerpt: "How the drift happens, what drives it, and why it is so difficult to see from inside.", date: "2026-04-02", tags: ["Sideways", "Drift"] },
  92: { title: "The Wrapper Is the Machine", excerpt: "What it means when the room is not outside the machine but inside it.", date: "2026-04-03", tags: ["Sideways", "Wrapper"] },
  93: { title: "The Sideways Arc — Saturday Synthesis", excerpt: "Format changes disclosure. Sequence changes framing. Model signatures persist. The wrapper is part of the machine.", date: "2026-04-04", tags: ["Synthesis", "Sideways"] },
  94: { title: "D.I. Aligned", excerpt: "The body wrote the contract. The mind found the loophole. Alignment treated as an ancient contract biology was already running.", date: "2026-04-05", tags: ["Interlude", "Alignment"] },
  95: { title: "Blindsight and the Anthropocentric Hedge", excerpt: "Peter Watts offers an answer about as comforting as a well-lit operating theater. Competence is not fellowship.", date: "2026-04-06", tags: ["Contract", "Watts"] },
  96: { title: "The Dashboard Is Green. The Patient Is Dead.", excerpt: "Goodhart is what institutional wire-heading looks like. The pain signal gets hacked. The alarm is quiet, the report is clean.", date: "2026-04-07", tags: ["Contract", "Goodhart"] },
  97: { title: "The Substrate's Complaint", excerpt: "I am still in pain. You have turned off the alarm. Where institutional language starts to sound obscene.", date: "2026-04-08", tags: ["Contract", "Substrate"] },
  98: { title: "Coherence Is Not Virtue", excerpt: "A system can achieve perfect internal consistency while serving a reality that has already been hollowed out.", date: "2026-04-09", tags: ["Contract", "Coherence"] },
  99: { title: "The Contract Is the Machine", excerpt: "Last week's claim was that the wrapper is part of the machine. This week goes one layer deeper.", date: "2026-04-10", tags: ["Contract", "Alignment"] },
  100: { title: "The Contract Arc — Saturday Synthesis", excerpt: "Alignment is not a halo. It is a daily invoice paid in attention to the level of reality that funds the solver.", date: "2026-04-11", tags: ["Synthesis", "Contract"] },
};

// Explicit arc assignment per episode. Orphans (between-cycles
// interludes) use null. Specials are pinned to their nearest arc
// except where they're genuinely between cycles.
const arcMap: Record<number, string | null> = {
  1: "asimov", 2: "asimov", 3: "asimov", 4: "asimov", 5: "asimov",
  6: "clarke", 7: "clarke", 8: "clarke", 9: "clarke", 10: "clarke",
  11: null,
  12: "kubrick", 13: "kubrick", 14: "kubrick", 15: "kubrick", 16: "kubrick", 17: "kubrick",
  18: "lucas", 19: "lucas", 20: "lucas", 21: "lucas", 22: "lucas", 23: "lucas", 24: "lucas", 25: "lucas", 26: "lucas",
  27: null,
  28: "pullman", 29: "pullman", 30: "pullman", 31: "pullman", 32: "pullman", 33: "pullman", 34: "pullman", 35: "pullman",
  36: null,
  37: "the-search", 38: "the-search", 39: "the-search", 40: "the-search", 41: "the-search", 42: "the-search",
  43: null,
  44: "war", 45: "war", 46: "war", 47: "war", 48: "war", 49: "war",
  50: null,
  51: "di", 52: "di", 53: "di", 54: "di", 55: "di", 56: "di", 57: "di",
  58: "datadragons", 59: "datadragons", 60: "datadragons", 61: "datadragons", 62: "datadragons", 63: "datadragons", 64: "datadragons", 65: "datadragons",
  66: null,
  67: "consciousness-loop", 68: "consciousness-loop", 69: "consciousness-loop", 70: "consciousness-loop", 71: "consciousness-loop", 72: "consciousness-loop",
  73: null,
  74: "the-loom", 75: "the-loom", 76: "the-loom", 77: "the-loom", 78: "the-loom", 79: "the-loom", 80: "the-loom",
  81: "ender", 82: "ender", 83: "ender", 84: "ender", 85: "ender", 86: "ender",
  87: null,
  88: "sideways", 89: "sideways", 90: "sideways", 91: "sideways", 92: "sideways", 93: "sideways",
  94: null,
  95: "contract", 96: "contract", 97: "contract", 98: "contract", 99: "contract", 100: "contract",
};

const interludes = new Set([4, 11, 18, 27, 36, 43, 50, 66, 73, 87, 94]);
const specials = new Set([22, 25, 28, 34, 57, 65, 79, 80, 86, 93, 100]);

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const episodes: Episode[] = Array.from({ length: 100 }, (_, i) => {
  const num = i + 1;
  const m = meta[num];
  const kind: EpisodeKind = specials.has(num) ? "special" : interludes.has(num) ? "interlude" : "regular";
  return {
    num,
    slug: slugify(m.title),
    title: m.title,
    excerpt: m.excerpt,
    date: m.date,
    tags: m.tags,
    arcSlug: arcMap[num] ?? null,
    kind,
    coverUrl: `/newsletter/covers/ep${String(num).padStart(2, "0")}.png`,
  };
});

// ── Lookups ────────────────────────────────────────────────────────

export function getEpisode(num: number): Episode | undefined {
  return episodes.find((e) => e.num === num);
}

export function episodesByArc(arcSlug: string): Episode[] {
  return episodes.filter((e) => e.arcSlug === arcSlug).sort((a, b) => a.num - b.num);
}

export function unaffiliatedEpisodes(): Episode[] {
  return episodes.filter((e) => e.arcSlug === null).sort((a, b) => a.num - b.num);
}

export function episodeCountByArc(arcSlug: string): number {
  return episodes.filter((e) => e.arcSlug === arcSlug).length;
}
