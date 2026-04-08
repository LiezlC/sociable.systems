import { notFound } from "next/navigation";
import { Page, PageHeader, StubNotice } from "@/components/Page";
import { domains } from "@/data/site";

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const d = domains.find((x) => x.slug === params.slug);
  return { title: d?.title ?? "Domain" };
}

export default function DomainPage({ params }: { params: { slug: string } }) {
  const d = domains.find((x) => x.slug === params.slug);
  if (!d) notFound();
  return (
    <Page>
      <PageHeader eyebrow="Research domain" title={d.title} lede={d.blurb} />
      <StubNotice what="Research outputs, linked newsletter episodes, linked canon concepts, and linked tools populate here." />
    </Page>
  );
}
