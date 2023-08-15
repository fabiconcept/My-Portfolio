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
    description: "During my time at OffrCloud, I led the development of a cutting-edge FinTech Dapp System as a Lone Remote Blockchain Developer. I not only coded but also created the captivating Landing Page, representing our innovation. My role included designing and securing an ERC20 Security Dividend Token, managing token sales, and deploying a transparent dividend distribution smart contract. These experiences deepened my blockchain knowledge and emphasized the importance of secure financial systems.",
    tech: [
      "React",
      "Firebase",
      "EthersJs",
      "Solidity",
      "Remix",
      "CSS",
      "Bootstrap",
      "Git",
      "GitHub",
      "Vercel",
      "Bootstrap",
      "emailjs-com",
    ],
  },
];
