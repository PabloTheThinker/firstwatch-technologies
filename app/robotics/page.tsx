import type { Metadata } from "next";
import DivisionPage from "../components/DivisionPage";

export const metadata: Metadata = {
  title: "First Watch Robotics — Autonomous Systems",
  description:
    "Autonomous systems for extreme environments. Extending human reach into spaces too dangerous, inaccessible, or distant for direct intervention.",
};

export default function Robotics() {
  return (
    <DivisionPage
      name="First Watch Robotics"
      number="03"
      subtitle="Autonomous Systems"
      icon="🤖"
      headline="Extending human reach"
      headlineAccent="where it matters most."
      description="We're building autonomous systems for the environments humans can't safely operate in — disaster zones, collapsed infrastructure, and eventually, other worlds. Machines that work alongside people in the most demanding conditions on and off this planet."
      paragraphs={[
        "When a building collapses, when floodwaters rise, when a wildfire cuts off an entire community — the first responders need force multipliers. Autonomous systems that can navigate rubble, maintain communication links, and deliver supplies without putting more lives at risk.",
        "Beyond Earth, the same principles apply at a different scale. Autonomous systems that can survey, build, and maintain infrastructure in environments where every kilogram of payload matters and every decision must be made without a human in the loop.",
      ]}
      capabilities={[
        {
          title: "Disaster Response",
          description:
            "Autonomous platforms designed for search, rescue, and supply delivery in post-disaster environments. Built to operate in degraded conditions where GPS, cellular, and infrastructure are compromised.",
        },
        {
          title: "Space Exploration",
          description:
            "Systems designed for long-duration autonomous operation in extreme environments. Capable of independent decision-making when communication delays make remote control impossible.",
        },
        {
          title: "Human-Machine Teaming",
          description:
            "Interfaces and protocols that let human operators and autonomous systems work together naturally. The machine extends capability — the human provides judgment.",
        },
      ]}
      tags={[
        "Autonomous Systems",
        "Disaster Response",
        "Space Exploration",
        "Human-Machine Teaming",
        "Field Robotics",
      ]}
      accentColor="orange"
    />
  );
}
