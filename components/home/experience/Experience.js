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
    title: "Cold Hubs Limited",
    position: "Backend Developer",
    time: "Aug. 2024 - Present",
    location: "Nigeria",
    description: "As a Backend Developer at Cold Hubs Limited, I am responsible for building and maintaining robust backend systems that support the company's cold storage and logistics solutions. I work closely with the team to implement efficient APIs and handle the business logic for features like cold storage bookings, logistics services, and user management. My role involves ensuring data integrity, system scalability, and seamless integration with the frontend. I also contribute to optimizing the company's internal workflows through the development of custom backend solutions.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Git",
      "GitHub",
      "DigitalOcean",
      "Mail Gun"
    ]
  },
  {
    title: "OffrCloud",
    position: "Part-Time Remote Blockchain Developer",
    time: "Dec. 2022 - July. 2023",
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
  {
    title: "Digital Skills Empowerment Program (DSEP)",
    position: "Frontend Development Tutor",
    time: "Sept. 2023 - Present",
    location: "Lagos, Nigeria",
    description: "As a Frontend Development Tutor at DSEP, I've had the privilege of mentoring and guiding aspiring developers on their journey to mastering the fundamentals of web development. My role primarily focuses on teaching beginners the essential building blocks of web development, including HTML, CSS, and JavaScript. I've had the opportunity to nurture their potential and cultivate their passion for creating web applications and sites.",
    tech: [
      "HTML",
      "CSS",
      "Git",
      "Javascript",
    ],
  },
  {
    title: "Team Soft 6060",
    position: "Frontend Developer",
    time: "June 2023 - Present",
    location: "Startup, Nigeria",
    description: "At Team Soft 6060, I had the privilege of working as a Frontend Developer in a dynamic environment that focused on cutting-edge SaaS software solutions. While I'm bound by a non-disclosure agreement, I collaborated closely with a diverse and talented team that included Frontend and Backend Developers, AI Engineers, Data Analysts, and UI/UX Designers.",
    tech: [
      "Next.js",
      "Tailwind",
      "Git",
      "MongoDB",
    ],
  },
];
