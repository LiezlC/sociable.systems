// ──────────────────────────────────────────────────────────────────
// Article loader — reads episode markdown from src/data/_incoming/articles/,
// parses frontmatter, returns rendered HTML keyed by episode number.
//
// Server-side only. Called from Next.js server components during build.
// ──────────────────────────────────────────────────────────────────
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const ARTICLES_DIR = path.join(process.cwd(), "src", "data", "articles");

export type Article = {
  episode: number;
  title?: string;
  date?: string;
  tags?: string[];
  html: string;
  raw: string;
};

let cache: Map<number, Article> | null = null;

// ── Boilerplate stripper ───────────────────────────────────────────
// A few late-run articles were pasted from LinkedIn with bylines,
// Speechify widget captions, duplicated dates, and similar cruft at
// the top. Strip these leading lines so the body starts on the real
// opening sentence.
const BOILERPLATE_PATTERNS: RegExp[] = [
  /^#+\s*Liezl Coetzee\s*$/i,
  /^Liezl Coetzee(,\s*#OPEN_TO_WORK)?\s*$/i,
  /^Accidental AInthropologist\b.*$/i,
  /^\(https:\/\/www\.linkedin\.com\/in\/liezl-coetzee\/?\)\s*$/i,
  /^Listen\s*$/i,
  /^•\s*$/,
  /^\d+\s*sec\s*$/i,
  /^Open Speechify library\s*$/i,
  /^#OPEN_TO_WORK\s*$/i,
  /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s*\d{4}\s*$/i,
  /^\*\*(January|February|March|April|May|June|July|August|September|October|November|December)\s+.*\d{4}.*\*\*\s*$/i,
];

function stripBoilerplate(raw: string): string {
  const lines = raw.split(/\r?\n/);
  let i = 0;
  // Drop leading blanks
  while (i < lines.length && lines[i].trim() === "") i++;
  // Drop any leading boilerplate lines (and blank separators between them)
  while (i < lines.length) {
    const ln = lines[i].trim();
    if (ln === "") {
      i++;
      continue;
    }
    if (BOILERPLATE_PATTERNS.some((re) => re.test(ln))) {
      i++;
      continue;
    }
    break;
  }
  // Collapse any duplicate consecutive date lines that sometimes appear
  // right at the top after stripping (e.g. "March 28, 2026\nMarch 28, 2026").
  const out = lines.slice(i);
  const dedup: string[] = [];
  for (let j = 0; j < out.length; j++) {
    const prev = dedup[dedup.length - 1]?.trim();
    const curr = out[j].trim();
    if (prev && curr && prev === curr && /\d{4}/.test(curr) && /^[A-Za-z]+ \d+/.test(curr)) continue;
    dedup.push(out[j]);
  }
  return dedup.join("\n").trimStart();
}


function loadAll(): Map<number, Article> {
  if (cache) return cache;
  const map = new Map<number, Article>();
  if (!fs.existsSync(ARTICLES_DIR)) {
    cache = map;
    return map;
  }
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const full = path.join(ARTICLES_DIR, file);
    const raw = fs.readFileSync(full, "utf8");
    let parsed: matter.GrayMatterFile<string>;
    try {
      parsed = matter(raw);
    } catch {
      parsed = { data: {}, content: raw } as matter.GrayMatterFile<string>;
    }
    // Episode number: prefer frontmatter, fall back to filename pattern `Episode_<N>`.
    let num: number | undefined = typeof parsed.data.episode === "number" ? parsed.data.episode : undefined;
    if (num === undefined) {
      const m = file.match(/Episode[_\s]*(\d+)/i);
      if (m) num = parseInt(m[1], 10);
    }
    if (num === undefined || Number.isNaN(num)) continue;
    // Arc consolidation essays don't belong on episode routes.
    if (/^Arc[_\s]*Consolidation/i.test(file)) continue;

    const body = stripBoilerplate(parsed.content);
    const html = marked.parse(body, { async: false }) as string;
    map.set(num, {
      episode: num,
      title: typeof parsed.data.title === "string" ? parsed.data.title : undefined,
      date: typeof parsed.data.date === "string" ? parsed.data.date : undefined,
      tags: Array.isArray(parsed.data.tags) ? (parsed.data.tags as string[]) : undefined,
      html,
      raw: body,
    });
  }
  cache = map;
  return map;
}

export function getArticle(episode: number): Article | undefined {
  return loadAll().get(episode);
}

export function hasArticle(episode: number): boolean {
  return loadAll().has(episode);
}
