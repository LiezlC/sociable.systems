// Loads arc-consolidation essays from src/data/_incoming/articles/.
// Files match: Arc_Consolidation_NN_<arcKey>.md
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIR = path.join(process.cwd(), "src", "data", "_incoming", "articles");

// Filename arc key → arc slug in site.ts
const KEY_TO_SLUG: Record<string, string> = {
  asimov: "asimov",
  clarke: "clarke",
  kubrick: "kubrick",
  lucas: "lucas",
  pullman: "pullman",
  the_search: "the-search",
  search: "the-search",
  war: "war",
  di: "di",
  datadragons: "datadragons",
  consciousness_loop: "consciousness-loop",
  the_loom: "the-loom",
  loom: "the-loom",
  ender: "ender",
  sideways: "sideways",
  contract: "contract",
};

export type Consolidation = { arcSlug: string; title?: string; html: string };

let cache: Map<string, Consolidation> | null = null;

function loadAll(): Map<string, Consolidation> {
  if (cache) return cache;
  const map = new Map<string, Consolidation>();
  if (!fs.existsSync(DIR)) {
    cache = map;
    return map;
  }
  const files = fs.readdirSync(DIR).filter((f) => /^Arc[_\s]*Consolidation/i.test(f) && f.endsWith(".md"));
  for (const file of files) {
    const m = file.match(/^Arc[_\s]*Consolidation[_\s]*\d+[_\s]*(.+?)\.md$/i);
    if (!m) continue;
    const rawKey = m[1].toLowerCase().replace(/[\s-]+/g, "_");
    const arcSlug = KEY_TO_SLUG[rawKey] ?? KEY_TO_SLUG[rawKey.replace(/^the_/, "")] ?? null;
    if (!arcSlug) continue;
    const raw = fs.readFileSync(path.join(DIR, file), "utf8");
    const parsed = matter(raw);
    const html = marked.parse(parsed.content, { async: false }) as string;
    map.set(arcSlug, {
      arcSlug,
      title: typeof parsed.data.title === "string" ? parsed.data.title : undefined,
      html,
    });
  }
  cache = map;
  return map;
}

export function getConsolidation(arcSlug: string): Consolidation | undefined {
  return loadAll().get(arcSlug);
}
