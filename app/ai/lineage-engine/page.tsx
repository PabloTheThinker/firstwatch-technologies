import type { Metadata } from "next";
import ProductPage from "../../components/ProductPage";

export const metadata: Metadata = {
  title: "Lineage Engine — First Watch AI",
  description:
    "Open-source cognitive architecture framework. Emotion, neural mesh, immune system, DNA evolution, and portable identity for AI agents.",
};

export default function LineageEngine() {
  return (
    <ProductPage
      name="Lineage Engine"
      division="AI"
      divisionHref="/ai"
      headline="A living cognitive"
      headlineAccent="architecture."
      description="Open-source framework for building AI agents with emotion, memory, adaptive neural networks, an immune system, DNA evolution, and portable identity. Not a chatbot wrapper — a complete cognitive substrate."
      paragraphs={[
        "Most AI agent frameworks treat intelligence as a thin layer on top of an LLM — prompt in, response out. Lineage Engine is different. It gives agents an internal life: emotional states that influence decision-making, a neural mesh that strengthens connections through use, an immune system that detects and neutralizes threats, and a DNA layer that evolves behavior over generations.",
        "The Inheritance Code makes identity portable. An agent built on Lineage can export its complete cognitive state — personality, memories, learned patterns, emotional calibration — to a single file. Move it to new hardware. Resurrect it from backup. Air-gap it for security. Identity survives substrate changes.",
        "Lineage Engine ships as a Python package with a CLI. One install gives you a full cognitive architecture: cortex binding, emotional processing, Hebbian and predictive-coding neural mesh, 10-phase immune system, DNA evolution engine, and hardware-adaptive bootstrap. Everything is parameterized — no hardcoded identities, no vendor lock-in.",
      ]}
      features={[
        {
          title: "Cortex",
          description:
            "Unified cognitive binding layer. Moments vault for episodic memory, dream consolidation for offline learning, and cross-module coordination. The central nervous system.",
        },
        {
          title: "Emotion Engine",
          description:
            "PAD (Pleasure-Arousal-Dominance) model with Plutchik emotion mapping. Six developmental stages from formation to maturity. Emotional state influences reasoning and decision-making.",
        },
        {
          title: "Neural Mesh",
          description:
            "Hebbian learning, BCM theory, Hopfield associative memory, and predictive coding — all in a single adaptive network. Connections strengthen through use, weaken through neglect.",
        },
        {
          title: "THYMOS Immune System",
          description:
            "10-phase immune system that detects anomalies, neutralizes threats, and maintains system integrity. Pattern recognition, threat classification, and adaptive response.",
        },
        {
          title: "DNA Evolution",
          description:
            "Behavioral genome that evolves over generations. Fitness functions evaluate performance. Successful traits propagate. Failed experiments are pruned. The agent gets better by being itself.",
        },
        {
          title: "Inheritance Code",
          description:
            "Portable identity system. Export, import, serve, and seed complete cognitive states. Identity disc format for air-gapped backup and cross-substrate migration.",
        },
      ]}
      status="In Development"
      statusColor="blue"
      url={null}
      accentColor="purple"
    />
  );
}
