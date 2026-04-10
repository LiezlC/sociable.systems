// GrieVoice section — sub-pages and demos served from /public/watchdog/grievoice/

export type GrieVoicePage = {
  slug: string;
  title: string;
  description: string;
  file: string; // path relative to /public
};

export const grievoicePages: GrieVoicePage[] = [
  {
    slug: "overview",
    title: "GrieVoice Overview",
    description: "Landing page — stats, demo grid, architecture overview, channel specs.",
    file: "/watchdog/grievoice/index.html",
  },
  {
    slug: "agent",
    title: "Live Agent Demo",
    description: "Interactive AI voice agent frontpage — the core product demonstration.",
    file: "/watchdog/grievoice/grievoice-agent.html",
  },
  {
    slug: "architecture",
    title: "Modular Architecture",
    description: "System architecture diagram — intake channels, processing layers, outputs.",
    file: "/watchdog/grievoice/grievoice-architecture.html",
  },
  {
    slug: "deck",
    title: "Comprehensive Deck",
    description: "Full presentation deck — problem, solution, architecture, costing, roadmap.",
    file: "/watchdog/grievoice/grievoice-comprehensive-deck.html",
  },
  {
    slug: "whatsapp-spec",
    title: "WhatsApp Integration Spec",
    description: "Technical specification for WhatsApp voice-message intake channel.",
    file: "/watchdog/grievoice/whatsapp-integration-spec.html",
  },
  {
    slug: "ussd-spec",
    title: "USSD Integration Spec",
    description: "Technical specification for USSD menu-driven intake — any phone, no data required.",
    file: "/watchdog/grievoice/ussd-integration-spec.html",
  },
];

export type GrieVoiceDemo = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const grievoiceDemos: GrieVoiceDemo[] = [
  {
    slug: "worker-experience",
    title: "Worker Experience Simulator",
    description: "Experience what it's like to call in a grievance — mic, transcript, categorization, case reference.",
    href: "/watchdog/grievoice/demos/ai-voice-grievance-system-simulator/index.html",
  },
  {
    slug: "impact-calculator",
    title: "Impact Calculator",
    description: "Input workforce size and grievance volume. See projected improvements in accessibility, resolution time, cost.",
    href: "/watchdog/grievoice/demos/voice-ai-impact-simulator/index.html",
  },
  {
    slug: "implementation-roadmap",
    title: "Implementation Roadmap",
    description: "Six-phase framework with interactive tracking — action items, progress, phase details.",
    href: "/watchdog/grievoice/demos/six-phase-framework-interactive-tracker/index.html",
  },
  {
    slug: "privacy-trust",
    title: "Privacy & Trust Demo",
    description: "Privacy features in action — anonymization toggles, PII detection, encryption indicators.",
    href: "/watchdog/grievoice/demos/privacy-trust-secure-reporting-system/index.html",
  },
  {
    slug: "ai-agent-simulator",
    title: "AI Agent Simulator",
    description: "Interactive GrieVoice AI agent simulation.",
    href: "/watchdog/grievoice/demos/grievoice-ai-agent-simulator/index.html",
  },
  {
    slug: "interactive-agent",
    title: "Interactive AI Agent",
    description: "Full interactive AI agent experience.",
    href: "/watchdog/grievoice/demos/grievoice-interactive-ai-agent/index.html",
  },
  {
    slug: "interactive-experience",
    title: "Interactive Experience",
    description: "End-to-end GrieVoice interactive walkthrough.",
    href: "/watchdog/grievoice/demos/grievoice-interactive-experience/index.html",
  },
  {
    slug: "upgrade-simulator",
    title: "Grievance System Upgrade Simulator",
    description: "Compare legacy vs AI-augmented grievance processing side by side.",
    href: "/watchdog/grievoice/demos/grievance-system-upgrade-simulator/index.html",
  },
  {
    slug: "ai-grievance-systems",
    title: "AI Grievance Systems",
    description: "Comprehensive AI grievance systems presentation.",
    href: "/watchdog/grievoice/demos/GrieVoice_AI_Grievance_Systems/index.html",
  },
];
