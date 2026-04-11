// JustDev — Just Development Rights: AI-Powered Enforcement Framework.
// HTML files served from /public/artifacts/justdev/

export type JustDevPage = {
  slug: string;
  title: string;
  description: string;
  file: string;
};

export const justdevPages: JustDevPage[] = [
  {
    slug: "overview",
    title: "Just Development Framework",
    description: "AI-powered enforcement of community development rights with audit and enforcement capabilities.",
    file: "/artifacts/justdev/index.html",
  },
  {
    slug: "overview-enhanced",
    title: "Just Development Framework (Enhanced)",
    description: "Enhanced version with enforceable metrics and community audit capabilities.",
    file: "/artifacts/justdev/index-enhanced.html",
  },
  {
    slug: "agent-demo",
    title: "JustDev AI Agent (Demo)",
    description: "Working demonstration of an AI agent for Just Development enforcement.",
    file: "/artifacts/justdev/Kimi2-JustDev-Agent.html",
  },
  {
    slug: "glass-box",
    title: "Glass Box Design",
    description: "Transparent enforcement — glass box vs black box, with open-source logic layers and multi-signer verification.",
    file: "/artifacts/justdev/Kimi2-JustDev-AgentClear.html",
  },
  {
    slug: "audit-trail",
    title: "Live Enforcement Dashboard",
    description: "Interactive dashboard with audit trail feed and popup transparency metrics.",
    file: "/artifacts/justdev/Kimi2-JustDev-AuditTrailFeed.html",
  },
  {
    slug: "clearbox",
    title: "Glass Box with Transparent Enforcement Rules",
    description: "Open-source logic layers, multi-signer verification, and transparent enforcement rules.",
    file: "/artifacts/justdev/Kimi2-JustDev-ClearBox.html",
  },
  {
    slug: "ifc-2026",
    title: "JustDev: 2026 IFC Campaign",
    description: "Campaign-focused version addressing urgent IFC timeline and risk scenarios.",
    file: "/artifacts/justdev/Kimi2-JustDev-IFC2026.html",
  },
  {
    slug: "modular-expansion",
    title: "Modular Enforcement Toolkit",
    description: "Tab-based enforcement components for extensible Just Development implementation.",
    file: "/artifacts/justdev/Kimi2-JustDev-ModularExpansion.html",
  },
  {
    slug: "metrics",
    title: "Enforceable Metrics Framework",
    description: "Framework for enforceable metrics with step-by-step implementation cards.",
    file: "/artifacts/justdev/Kimi2-JiustDevMetrics.html",
  },
];
