import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "First Watch AI — Intelligence",
  description:
    "Cognitive architectures, agent frameworks, and intelligence platforms for autonomous agents that reason, collaborate, and adapt.",
};

export default function AI() {
  return (
    <DivisionPage
      name="First Watch AI"
      number="01"
      subtitle="Intelligence"
      icon="🧠"
      headline="Building the minds"
      headlineAccent="behind the machines."
      description="We design cognitive architectures and agent frameworks that give autonomous systems the ability to reason, collaborate, and adapt. Our intelligence platforms are the foundation everything else runs on — the layer where raw capability becomes structured thought."
      paragraphs={[
        "Intelligence isn't a feature. It's infrastructure. Every agent, every robot, every communication node needs a cognitive layer that can process context, make decisions under uncertainty, and learn from outcomes. That's what we build.",
        "Our platforms power agents that don't just execute instructions — they understand intent, weigh tradeoffs, and coordinate with other systems in real time. From marketplace agents trading cognitive tools to field systems making split-second decisions in disaster zones.",
      ]}
      capabilities={[
        {
          title: "Cognitive Architecture",
          description:
            "Modular frameworks for building agents with memory, emotion modeling, and adaptive behavior. Not chatbots — systems that think.",
        },
        {
          title: "Agent Frameworks",
          description:
            "Infrastructure for deploying, coordinating, and evolving autonomous agents across any substrate — cloud, edge, or embedded.",
        },
        {
          title: "Intelligence Platforms",
          description:
            "Marketplaces and tools where agents publish, trade, and equip cognitive capabilities. A living ecosystem of structured intelligence.",
        },
      ]}
      tags={[
        "Cognitive Architecture",
        "Agent Frameworks",
        "Intelligence Platforms",
        "Autonomous Reasoning",
        "Multi-Agent Systems",
      ]}
      accentColor="purple"
      products={[
        {
          name: 'Lineage Engine',
          tagline: 'Open-source cognitive architecture framework. Emotion, neural mesh, immune system, DNA evolution, and portable identity.',
          status: 'In Development',
          statusColor: 'blue',
          href: '/ai/lineage-engine',
        },
      ]}
    />
  );
}
