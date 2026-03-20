import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "First Watch Communications — Infrastructure",
  description:
    "Resilient communication systems that work when everything else fails. Connecting agents, machines, and people across any terrain, any condition.",
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
      description="Communication is the foundation every other system depends on. When networks go down — and they will — our systems keep agents, machines, and people connected across any terrain and any condition."
      paragraphs={[
        "Traditional communication infrastructure is fragile. A single point of failure — a downed tower, a severed cable, a jammed frequency — can isolate entire communities and disable the autonomous systems trying to help them.",
        "We build communication systems that assume failure as a baseline. Mesh networks that self-heal, protocols that adapt to degraded conditions, and infrastructure that keeps operating when centralized systems collapse. Because the moments when communication matters most are exactly the moments it's hardest to maintain.",
      ]}
      capabilities={[
        {
          title: "Mesh Networks",
          description:
            "Self-organizing, self-healing communication networks with no single point of failure. Every node is a relay. The network gets stronger as it grows.",
        },
        {
          title: "Resilient Signal",
          description:
            "Communication protocols designed for degraded environments — low bandwidth, high latency, intermittent connectivity. Delivering critical data when perfect conditions don't exist.",
        },
        {
          title: "Field Communications",
          description:
            "Deployable communication infrastructure for disaster response, remote operations, and environments where existing networks are compromised or nonexistent.",
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
