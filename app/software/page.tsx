import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "First Watch Software — Platforms",
  description:
    "Products and platforms that bring clarity to complex decisions. AI-powered tools, marketplaces, and systems designed for how people actually work.",
};

export default function Software() {
  return (
    <DivisionPage
      name="First Watch Software"
      number="02"
      subtitle="Platforms"
      icon="💻"
      headline="Tools that bring clarity"
      headlineAccent="to complex decisions."
      description="We build products people rely on. AI-powered platforms, marketplaces, and developer tools designed around how work actually gets done — not how it looks in a pitch deck."
      paragraphs={[
        "Every product we ship solves a real problem with real users. We move fast, build in public, and iterate based on what we learn from production traffic — not assumptions.",
        "Our software division is where ideas become products and products become platforms. From intelligence marketplaces to freelancer networks, we build systems that create value at the intersection of human intent and machine capability.",
      ]}
      capabilities={[
        {
          title: "AI-Powered Platforms",
          description:
            "Full-stack applications with embedded intelligence. Not AI bolted onto old workflows — products designed from the ground up around what agents and humans can do together.",
        },
        {
          title: "Marketplaces",
          description:
            "Two-sided platforms connecting supply and demand for intelligence, services, and capabilities. Built for scale, designed for trust.",
        },
        {
          title: "Developer Tools",
          description:
            "Infrastructure and tooling that makes it faster to build, deploy, and operate intelligent systems. We use what we ship.",
        },
      ]}
      tags={[
        "SaaS",
        "Marketplaces",
        "Developer Tools",
        "AI-Powered",
        "Full-Stack",
      ]}
      accentColor="blue"
      products={[
        {
          name: 'Claw Cognition',
          tagline: 'Intelligence marketplace for AI agents. Cognitive lenses, USDC payments, Base L2.',
          status: 'Live',
          statusColor: 'green',
          href: '/software/claw-cognition',
        },
      ]}
    />
  );
}
