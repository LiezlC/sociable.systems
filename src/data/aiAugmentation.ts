// AI Augmentation — multi-model arena outputs exploring the "amplify not replace" thesis.
// Each model was given the same brief; the files are their responses.
// HTML files served from /public/artifacts/ai-augmentation/

export type AiAugmentationPage = {
  slug: string;
  title: string;
  description: string;
  file: string;
  model: string; // which AI model produced this
};

export const aiAugmentationPages: AiAugmentationPage[] = [
  {
    slug: "overview",
    title: "AI Augmentation: Beyond Replacement to Renaissance",
    description: "Foundational vision — AI as human amplifier rather than replacement.",
    file: "/artifacts/ai-augmentation/Z-ai-augmentation.html",
    model: "Overview",
  },
  {
    slug: "comprehensive",
    title: "AI Augmentation (Comprehensive)",
    description: "Comprehensive foundational resource across all model implementations.",
    file: "/artifacts/ai-augmentation/ai-augmentation-comprehensive.html",
    model: "Composite",
  },
  {
    slug: "opus-4",
    title: "The Great Reframe: AI Amplifies Humanity",
    description: "Campaign messaging around AI elevation and human amplification.",
    file: "/artifacts/ai-augmentation/Opus4.html",
    model: "Claude Opus 4",
  },
  {
    slug: "opus-41-amplification",
    title: "Amplify Not Replace — The AI Transformation Movement",
    description: "Transformation movement narrative — hope vs fear gradient messaging.",
    file: "/artifacts/ai-augmentation/Opus41_amplification-campaign.html",
    model: "Claude Opus 4.1",
  },
  {
    slug: "claude-opus-vision",
    title: "AI Augmentation Vision",
    description: "Foundational augmentation vision from Claude Opus.",
    file: "/artifacts/ai-augmentation/claudeopus_ai-augmentation-vision.html",
    model: "Claude Opus",
  },
  {
    slug: "claude-sonnet",
    title: "The AI Empowerment Revolution",
    description: "AI empowerment concept with detailed styling and visual narrative.",
    file: "/artifacts/ai-augmentation/claudesonnet-ai_amplification_concept.html",
    model: "Claude Sonnet",
  },
  {
    slug: "gpt-4o",
    title: "Imagine If\u2026 Redeploying AI with Purpose",
    description: "Interactive thought experiment — redeploying AI resources for human transformation.",
    file: "/artifacts/ai-augmentation/GPT4o_ai_redeployment_webpage.html",
    model: "GPT-4o",
  },
  {
    slug: "gpt-5",
    title: "Redeploy > Replace — Interactive Thought Experiment",
    description: "Interactive exploration of redeployment scenarios where AI upskills rather than replaces.",
    file: "/artifacts/ai-augmentation/GPT5_redeploy_replace_interactive_concept_webpage.html",
    model: "GPT-5",
  },
  {
    slug: "gemini",
    title: "AI: Amplifier for Humanity",
    description: "Narrative framework presenting AI as humanity amplifier with practical examples.",
    file: "/artifacts/ai-augmentation/Gemini-amplifierforhumanity.html",
    model: "Gemini",
  },
  {
    slug: "qwen",
    title: "Upgrade, Not Replace",
    description: "Co-pilot narrative positioning AI as an upgrade tool for human capability.",
    file: "/artifacts/ai-augmentation/Qwen-upgradenotreplace.html",
    model: "Qwen",
  },
  {
    slug: "grok",
    title: "From Replacement to Renaissance",
    description: "Renaissance-themed vision shifting AI discourse from job replacement to human flourishing.",
    file: "/artifacts/ai-augmentation/grok-AIrenaissance.html",
    model: "Grok",
  },
  {
    slug: "genspark",
    title: "The Elevation Manifesto",
    description: "Interactive manifesto advocating elevation of human potential through AI amplification.",
    file: "/artifacts/ai-augmentation/genspark_elevation-manifesto-interactive.html",
    model: "Genspark",
  },
  {
    slug: "minimax",
    title: "The Great AI Transformation",
    description: "Transformation narrative — shift from replacement fears to amplification opportunities.",
    file: "/artifacts/ai-augmentation/minimax_ai_transformation_narrative.html",
    model: "MiniMax",
  },
  {
    slug: "perplexity",
    title: "Beyond Replacement: The AI Empowerment Revolution",
    description: "Comprehensive empowerment revolution vision with interactive elements.",
    file: "/artifacts/ai-augmentation/perplexity_ai_empowerment_single_file.html",
    model: "Perplexity",
  },
  {
    slug: "perplexity-full",
    title: "AI Empowerment Vision (Full)",
    description: "Full-featured Perplexity empowerment vision with external styling.",
    file: "/artifacts/ai-augmentation/ai-empowerment-vision-perplexity/index.html",
    model: "Perplexity",
  },
];
