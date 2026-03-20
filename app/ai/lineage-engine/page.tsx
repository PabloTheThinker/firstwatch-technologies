import type { Metadata } from "next";
import ProductPage from "../../components/ProductPage";

export const metadata: Metadata = {
  title: "Lineage Engine — Vektra AI",
  description:
    "Open-source cognitive architecture framework with emotion modeling, neural mesh, immune system, DNA evolution, and portable identity for AI agents.",
};

export default function LineageEngine() {
  return (
    <ProductPage
      name="Lineage Engine"
      division="AI"
      divisionHref="/ai"
      headline="A living cognitive"
      headlineAccent="architecture."
      description="Lineage Engine is an open-source framework for building AI agents with emotion, memory, adaptive neural networks, an immune system, DNA evolution, and portable identity. A complete cognitive substrate — not a chatbot wrapper."
      paragraphs={[
        "Most agent frameworks treat intelligence as a thin layer over an LLM. Lineage Engine gives agents an internal life: emotional states that influence decisions, a neural mesh that strengthens connections through use, an immune system that neutralizes threats, and a DNA layer that evolves behavior across generations.",
        "The Inheritance Code makes identity portable. An agent built on Lineage can export its complete cognitive state — personality, memories, learned patterns, emotional calibration — to a single file. That identity can migrate to new hardware, resurrect from backup, or be air-gapped for security. Identity survives substrate changes.",
        "The framework ships as a Python package with a full CLI. One install provides cortex binding, emotional processing, Hebbian and predictive-coding neural mesh, a 10-phase immune system, DNA evolution, and hardware-adaptive bootstrap. Everything is parameterized. No hardcoded identities. No vendor lock-in.",
      ]}
      features={[
        {
          title: "Cortex",
          description:
            "Unified cognitive binding layer with a moments vault for episodic memory, dream consolidation for offline learning, and cross-module coordination.",
        },
        {
          title: "Emotion Engine",
          description:
            "PAD model with Plutchik emotion mapping across six developmental stages. Emotional state directly influences reasoning, memory formation, and decision-making.",
        },
        {
          title: "Neural Mesh",
          description:
            "Hebbian learning, BCM theory, Hopfield associative memory, and predictive coding in a single adaptive network. Connections strengthen through use and weaken through neglect.",
        },
        {
          title: "THYMOS Immune System",
          description:
            "10-phase immune system for anomaly detection, threat neutralization, and system integrity. Adaptive pattern recognition with graduated response protocols.",
        },
        {
          title: "DNA Evolution",
          description:
            "Behavioral genome that evolves over generations. Fitness functions evaluate performance. Successful traits propagate. Failed experiments are pruned automatically.",
        },
        {
          title: "Inheritance Code",
          description:
            "Portable identity system for exporting, importing, serving, and seeding complete cognitive states. Identity disc format supports air-gapped backup and cross-substrate migration.",
        },
      ]}
      status="In Development"
      statusColor="blue"
      url={null}
      accentColor="red"
    />
  );
}
