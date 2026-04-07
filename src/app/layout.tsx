import "./globals.css";
import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";

export const metadata: Metadata = {
  title: {
    default: "sociable.systems — industrial safety for algorithmic systems",
    template: "%s · sociable.systems",
  },
  description:
    "For the people who already live inside decision systems that affect real lives. AI accountability, ESG safeguards, grievance architecture, the Calvin Convention.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
