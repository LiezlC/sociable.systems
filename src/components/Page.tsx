import Link from "next/link";
import { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return <main className="max-w-6xl mx-auto px-6 py-12">{children}</main>;
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="mb-10 border-b border-ink/10 pb-8">
      {eyebrow && <div className="text-xs uppercase tracking-widest text-rust mb-2">{eyebrow}</div>}
      <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">{title}</h1>
      {lede && <p className="mt-4 text-lg text-steel max-w-3xl">{lede}</p>}
    </header>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function Card({
  href,
  title,
  blurb,
  meta,
}: {
  href: string;
  title: string;
  blurb?: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="block border border-ink/10 hover:border-teal/50 p-5 rounded-sm transition-colors no-underline"
    >
      <div className="font-serif text-lg leading-snug">{title}</div>
      {blurb && <p className="mt-2 text-sm text-steel">{blurb}</p>}
      {meta && <div className="mt-3 text-xs uppercase tracking-wider text-steel/70">{meta}</div>}
    </Link>
  );
}

export function StubNotice({ what }: { what: string }) {
  return (
    <div className="mt-12 border-l-2 border-rust pl-4 text-sm text-steel italic">
      Stub page. {what}
    </div>
  );
}
