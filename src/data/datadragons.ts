// DataDragons — educational materials tied to the DataDragons newsletter arc.
// HTML files served from /public/watchdog/dragons/

export type DataDragonPage = {
  slug: string;
  title: string;
  description: string;
  file: string;
};

export const datadragonPages: DataDragonPage[] = [
  {
    slug: "dd101",
    title: "DD101",
    description: "DataDragon 101 introductory content — the entry point.",
    file: "/watchdog/dragons/dd101.html",
  },
  {
    slug: "taming-101",
    title: "DataDragon Taming 101",
    description: "Guide to taming data dragons — dimensional modelling fundamentals.",
    file: "/watchdog/dragons/DataDragonTaming101.html",
  },
  {
    slug: "slayer-quest",
    title: "Data Dragon Slayer Quest",
    description: "Interactive quest academy — learn dimensional modelling through medieval fantasy-themed challenges.",
    file: "/watchdog/dragons/DataDragonSlayerQuest.html",
  },
  {
    slug: "dragon-realms",
    title: "Data Dragon Realms",
    description: "Comprehensive interactive learning experience for data mastery with D3 visualisations.",
    file: "/watchdog/dragons/data-dragon-realms-complete.html",
  },
  {
    slug: "slayer-program",
    title: "The Data Dragon Slayer Program",
    description: "Complete course program — data skills through a dragon-slaying quest narrative.",
    file: "/watchdog/dragons/data-dragon-slayer-complete.html",
  },
];
