import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "OffrCloud",
    position: "Blockchain Developer",
    time: "2022 - Present",
    location: "Atlanta, US",
    description:
      "I help build the company's Landing page, DApp system, smart contracts (Security Token, Token Sale, Token Dividend Management).",
    tech: [
      "React",
      "Firebase",
      "EthersJs",
      "Git",
      "GitHub",
      "Vercel",
      "Bootstrap",
      "emailjs-com",
    ],
  },
];
