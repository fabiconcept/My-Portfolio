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
    description: <>
      <p>During my time at OffrCloud, I held the position of Lone Remote Blockchain Developer. I played a pivotal role in conceiving and executing a state-of-the-art FinTech Dapp System. My responsibilities extended beyond coding, as I also led the creation of the company&apos;s engaging Landing Page, serving as the digital ambassador for our innovative solutions.</p>

      <p>A major focus of my role involved the creation of a Security Dividend Token on the ERC20 standard. This required implementing robust security protocols to ensure its integrity. Additionally, I crafted a smart contract for token sales, streamlining the complexities of the sales process.</p>

      <p>Furthermore, I successfully designed and deployed a dividend management smart contract. This solution enabled the transparent and efficient distribution of dividends to relevant stakeholders.</p>

      <p>My tenure at OffrCloud deepened my understanding of the intricacies of blockchain technology and underscored the critical role secure, transparent, and efficient financial systems play in modern business landscapes.</p>
    </>,
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
