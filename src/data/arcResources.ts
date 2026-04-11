// Extra resources attached to specific newsletter arcs.
// Keyed by arc slug. Rendered in the arc page as a "Companion artifacts" block.
//
// HTML resources now point to in-site routes (not raw static files)
// so navigation stays within the site chrome.
export type ArcResource = { title: string; href: string; kind: string };

export const arcResources: Record<string, ArcResource[]> = {
  datadragons: [
    { title: "DataDragons Hub", href: "/the-watchdog/datadragons", kind: "Section" },
    { title: "DataDragon Taming 101", href: "/the-watchdog/datadragons/taming-101", kind: "HTML" },
    { title: "Data Dragon Slayer Quest", href: "/the-watchdog/datadragons/slayer-quest", kind: "HTML" },
    { title: "Data Dragon Realms (complete)", href: "/the-watchdog/datadragons/dragon-realms", kind: "HTML" },
    { title: "Data Dragon Slayer (complete)", href: "/the-watchdog/datadragons/slayer-program", kind: "HTML" },
    { title: "DD101", href: "/the-watchdog/datadragons/dd101", kind: "HTML" },
    { title: "Dragon Data — Introduction", href: "/downloads/DragonDataIntro.pdf", kind: "PDF" },
    { title: "Data Dragon ID Kit", href: "/downloads/Data Dragon ID Kit.pdf", kind: "PDF" },
    { title: "Foundation: Data Decay", href: "/downloads/Foundation_DataDecay.pdf", kind: "PDF" },
  ],
  asimov: [
    { title: "Asimov Emergence Vision", href: "/newsletter/companion/asimov-emergence-vision", kind: "HTML" },
  ],
};
