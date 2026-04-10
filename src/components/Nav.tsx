import Link from "next/link";
import { topNav, site } from "@/data/site";

export function Nav() {
  return (
    <header className="border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Link href="/" className="font-serif text-xl tracking-tight">
          {site.name.toLowerCase()}<span className="text-rust">.</span>
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {topNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-steel hover:text-teal">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-xs text-steel/80 flex flex-col md:flex-row md:justify-between gap-2">
        <div>© {new Date().getFullYear()} Liezl Coetzee · sociable.systems</div>
        <div className="italic">Industrial safety for algorithmic systems</div>
      </div>
    </footer>
  );
}
