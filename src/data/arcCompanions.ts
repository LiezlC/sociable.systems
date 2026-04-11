// Arc companion artifacts — standalone HTML pages linked from newsletter arc pages.
// These are single-file resources tied to specific arcs, now wired into the site.

export type ArcCompanion = {
  slug: string;
  title: string;
  description: string;
  file: string;
  arcSlug: string; // links back to the parent arc
};

export const arcCompanions: ArcCompanion[] = [
  {
    slug: "asimov-emergence-vision",
    title: "The Emergence Protocol: Beyond Control",
    description: "Vision exploring emergence and transcendence — philosophical framing for the Asimov arc's pre-action constraint thesis.",
    file: "/asimov-emergence-vision.html",
    arcSlug: "asimov",
  },
];
