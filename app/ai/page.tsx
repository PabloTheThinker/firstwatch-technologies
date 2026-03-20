import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Vektra AI — Intelligence",
  description:
    "Cognitive architectures, agent frameworks, and intelligence platforms that give autonomous systems the ability to reason, adapt, and evolve.",
};

export default function AI() {
  return (
    <DivisionPage
      name="Vektra AI"
      number="01"
      subtitle="Intelligence"
      icon="🧠"
      headline="Building the minds"
      headlineAccent="behind the machines."
      description="Vektra AI develops cognitive architectures and agent frameworks that give autonomous systems the ability to reason, collaborate, and adapt in real time."
      paragraphs={[
        "Intelligence is infrastructure. Every autonomous agent, every robotic system, and every communication node requires a cognitive layer capable of processing context, making decisions under uncertainty, and learning from outcomes.",
        "Our frameworks go beyond prompt-response patterns. We build systems with internal state — emotion models that influence decision-making, neural networks that strengthen through use, and behavioral genomes that evolve across generations.",
        "The result is agents that understand intent, weigh tradeoffs, and coordinate with other systems autonomously. Whether operating in a marketplace or a disaster zone, the cognitive layer remains the same.",
      ]}
      capabilities={[
        {
          title: "Cognitive Architecture",
          description:
            "Modular frameworks for building agents with memory, emotion modeling, and adaptive behavior. Systems designed to think, not just respond.",
        },
        {
          title: "Agent Frameworks",
          description:
            "Infrastructure for deploying, coordinating, and evolving autonomous agents across any substrate — cloud, edge, or embedded hardware.",
        },
        {
          title: "Intelligence Platforms",
          description:
            "Marketplaces and tools where agents publish, discover, and equip cognitive capabilities. A living ecosystem of structured intelligence.",
        },
      ]}
      tags={[
        "Cognitive Architecture",
        "Agent Frameworks",
        "Intelligence Platforms",
        "Autonomous Reasoning",
        "Multi-Agent Systems",
      ]}
      accentColor="red"
      products={[
        {
          name: 'Lineage Engine',
          tagline: 'Open-source cognitive architecture framework with emotion, neural mesh, immune system, DNA evolution, and portable identity.',
          status: 'In Development',
          statusColor: 'blue',
          href: '/ai/lineage-engine',
        },
      ]}
    />
  );
}
