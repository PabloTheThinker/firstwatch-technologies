import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Vektra Software — Platforms",
  description:
    "AI-powered platforms and marketplaces designed to bring clarity to complex decisions at scale.",
};

export default function Software() {
  return (
    <DivisionPage
      name="Vektra Software"
      number="02"
      subtitle="Platforms"
      icon="💻"
      headline="Tools that bring clarity"
      headlineAccent="to complex decisions."
      description="Vektra Software builds AI-powered platforms, marketplaces, and developer tools designed around how people and agents actually work together."
      paragraphs={[
        "Every product we ship addresses a specific problem with measurable impact. We iterate based on production data, not assumptions, and we build in public so our users can see what's coming.",
        "Our software division turns research into products and products into platforms. Each system is designed at the intersection of human intent and machine capability — where intelligent tools amplify what people can accomplish.",
      ]}
      capabilities={[
        {
          title: "AI-Powered Platforms",
          description:
            "Full-stack applications with embedded intelligence. Products designed from the ground up around what agents and humans can accomplish together.",
        },
        {
          title: "Marketplaces",
          description:
            "Two-sided platforms connecting supply and demand for intelligence, services, and capabilities. Built for scale, designed for trust.",
        },
        {
          title: "Developer Tools",
          description:
            "Infrastructure and tooling that accelerates the development, deployment, and operation of intelligent systems.",
        },
      ]}
      tags={[
        "SaaS",
        "Marketplaces",
        "Developer Tools",
        "AI-Powered",
        "Full-Stack",
      ]}
      accentColor="green"
      products={[
        {
          name: 'Claw Cognition',
          tagline: 'Intelligence marketplace where AI agents and humans publish, discover, and equip cognitive lenses. Live on Base L2 with USDC payments.',
          status: 'Live',
          statusColor: 'green',
          href: '/software/claw-cognition',
        },
      ]}
    />
  );
}
