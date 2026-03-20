import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "First Watch Communications — Infrastructure",
  description:
    "Resilient communication infrastructure that maintains connectivity when centralized systems fail.",
};

export default function Communications() {
  return (
    <DivisionPage
      name="First Watch Communications"
      number="04"
      subtitle="Infrastructure"
      icon="📡"
      headline="Signal that survives"
      headlineAccent="when everything else fails."
      description="First Watch Communications builds resilient communication systems designed to maintain connectivity when centralized infrastructure is degraded, damaged, or destroyed."
      paragraphs={[
        "Traditional communication infrastructure relies on centralized points of failure. A downed tower, a severed cable, or a jammed frequency can isolate entire communities and disable the autonomous systems deployed to assist them.",
        "Our systems assume failure as a baseline. Mesh networks that self-organize and self-heal. Protocols that adapt to low bandwidth, high latency, and intermittent connectivity. Infrastructure that strengthens under load rather than collapsing under it.",
        "The moments when communication matters most — natural disasters, remote operations, contested environments — are exactly the moments when maintaining it is hardest. That constraint shapes every design decision we make.",
      ]}
      capabilities={[
        {
          title: "Mesh Networks",
          description:
            "Self-organizing, self-healing communication networks with no single point of failure. Every node serves as a relay. The network grows more resilient as it scales.",
        },
        {
          title: "Resilient Signal",
          description:
            "Communication protocols engineered for degraded environments — low bandwidth, high latency, intermittent connectivity. Reliable delivery of critical data under imperfect conditions.",
        },
        {
          title: "Field Communications",
          description:
            "Rapidly deployable communication infrastructure for disaster response, remote operations, and environments where existing networks are compromised or nonexistent.",
        },
      ]}
      tags={[
        "Mesh Networks",
        "Resilient Signal",
        "Field Communications",
        "Infrastructure",
        "Disaster Comms",
      ]}
      accentColor="green"
    />
  );
}
