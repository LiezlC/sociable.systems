import { Page, PageHeader, StubNotice } from "@/components/Page";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Page>
      <PageHeader eyebrow="About · Contact" title="Get in touch" lede="Advisory enquiries, curriculum conversations, press, speaking." />
      <StubNotice what="Contact form, direct email, scheduling link, and advisory intake flow populate here." />
    </Page>
  );
}
