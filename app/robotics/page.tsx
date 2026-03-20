import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "Vektra Robotics — Autonomous Systems",
  description:
    "Autonomous systems designed to operate in extreme environments — disaster zones, remote terrain, and beyond Earth.",
};

export default function Robotics() {
  return (
    <DivisionPage
      name="Vektra Robotics"
      number="03"
      subtitle="Autonomous Systems"
      icon="🤖"
      headline="Extending human reach"
      headlineAccent="where it matters most."
      description="Vektra Robotics develops autonomous systems for environments where direct human operation is too dangerous, too remote, or too slow to be effective."
      paragraphs={[
        "When infrastructure collapses, when floodwaters rise, or when wildfire isolates an entire community, first responders need force multipliers. Autonomous systems that navigate rubble, maintain communication links, and deliver critical supplies — without putting additional lives at risk.",
        "Beyond Earth, the same engineering principles apply at a different scale. Systems capable of surveying, constructing, and maintaining infrastructure in environments where payload mass is measured in grams and every decision must be made without a human in the loop.",
        "Our approach centers on human-machine teaming. The autonomous system extends capability. The human operator provides judgment. Neither replaces the other.",
      ]}
      capabilities={[
        {
          title: "Disaster Response",
          description:
            "Autonomous platforms for search, rescue, and supply delivery in post-disaster environments. Designed to operate where GPS, cellular, and physical infrastructure are compromised.",
        },
        {
          title: "Space Exploration",
          description:
            "Long-duration autonomous systems for extreme environments. Independent decision-making when communication delays make real-time remote control impossible.",
        },
        {
          title: "Human-Machine Teaming",
          description:
            "Interfaces and protocols enabling natural collaboration between human operators and autonomous systems. The machine extends reach. The human provides direction.",
        },
      ]}
      tags={[
        "Autonomous Systems",
        "Disaster Response",
        "Space Exploration",
        "Human-Machine Teaming",
        "Field Robotics",
      ]}
      accentColor="blue"
    />
  );
}
