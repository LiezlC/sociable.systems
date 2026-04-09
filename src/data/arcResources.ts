// Extra resources attached to specific newsletter arcs.
// Keyed by arc slug. Rendered in the arc page as a "Companion artifacts" block.
export type ArcResource = { title: string; href: string; kind: string };

export const arcResources: Record<string, ArcResource[]> = {
  datadragons: [
    { title: "DataDragon Taming 101", href: "/watchdog/dragons/DataDragonTaming101.html", kind: "HTML" },
    { title: "Data Dragon Slayer Quest", href: "/watchdog/dragons/DataDragonSlayerQuest.html", kind: "HTML" },
    { title: "Data Dragon Realms (complete)", href: "/watchdog/dragons/data-dragon-realms-complete.html", kind: "HTML" },
    { title: "Data Dragon Slayer (complete)", href: "/watchdog/dragons/data-dragon-slayer-complete.html", kind: "HTML" },
    { title: "DD101", href: "/watchdog/dragons/dd101.html", kind: "HTML" },
    { title: "Dragon Data — Introduction", href: "/downloads/DragonDataIntro.pdf", kind: "PDF" },
    { title: "Data Dragon ID Kit", href: "/downloads/Data Dragon ID Kit.pdf", kind: "PDF" },
    { title: "Foundation: Data Decay", href: "/downloads/Foundation_DataDecay.pdf", kind: "PDF" },
  ],
  asimov: [
    { title: "Asimov Emergence Vision", href: "/asimov-emergence-vision.html", kind: "HTML" },
  ],
};
