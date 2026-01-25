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
    title: "Imo Digital City Limited (IDCL)",
    position: "Software Developer",
    time: "Jan. 2025 - Present",
    location: "Imo State, Nigeria",
    description:
      "As a Software Developer at Imo Digital City Limited, I work on large scale government digitization projects in partnership with the Ministry of Digital Economy. My responsibilities include building and deploying public sector platforms, digitizing internal workflows, and translating government policies into functional digital systems. I collaborate directly with stakeholders across ministries to deliver reliable, scalable, and accessible digital solutions.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Nest.js",
      "TypeScript",
      "PostgreSQL",
      "Git",
      "GitHub",
      "3+"
    ],
  },
  {
    title: "American International School of Medicine (AISM)",
    position: "Web Developer (Contract)",
    time: "Oct. 2024 - Present",
    location: "Alpharetta, US (Remote)",
    description:
      "As a contract Web Developer for AISM, I enhance and maintain the school’s web platforms with a focus on performance, accessibility, and responsiveness. I work closely with internal teams to improve content delivery, student engagement, and overall user experience using modern frontend tooling.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "Vercel",
      "Sirv",
    ],
  },
  {
    title: "Cold Hubs Limited",
    position: "Backend Developer",
    time: "2023",
    location: "Nigeria",
    description:
      "At Cold Hubs Limited, I built scalable backend systems supporting cold storage logistics, inventory management, and warehouse operations. My work included designing MySQL schemas, building Laravel APIs, implementing authentication and role based access control, and optimizing data pipelines used by both field and admin systems.",
    tech: [
      "Laravel",
      "PHP",
      "TypeScript",
      "MySQL",
      "Git",
      "GitHub",
      "DigitalOcean",
      "Mailgun",
      "6+"
    ],
  },
  {
    title: "Supervision Company",
    position: "Software Developer",
    time: "2022",
    location: "Remote",
    description:
      "At Supervision Company, I built internal tools using AppSheet and Google Apps Script to automate workflows and reduce manual operations. I developed data driven applications that improved reporting accuracy, streamlined processes, and enabled non technical teams to interact with complex datasets more efficiently.",
    tech: [
      "AppSheet",
      "Google Sheets",
      "JavaScript",
      "Google Apps Script",
      "Google Workspace",
    ],
  },
  {
    title: "Digital Skills Empowerment Program (DSEP)",
    position: "Frontend Development Tutor",
    time: "Jan. 2022 - Jan. 2023",
    location: "Nigeria",
    description:
      "As a Frontend Development Tutor at DSEP, I taught beginners the fundamentals of web development including HTML, CSS, and JavaScript. I guided students through hands on projects, helped them build confidence in coding, and supported their transition into modern frontend frameworks.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
    ],
  },
  {
    title: "OffrCloud",
    position: "Blockchain Developer",
    time: "2020",
    location: "Remote",
    description:
      "At OffrCloud, I worked as a Blockchain Developer building a Web3 fintech application with wallet authentication and smart contract integration. I developed Solidity contracts for token handling and rewards, deployed contracts to blockchain networks, and built React interfaces connected to both smart contracts and REST APIs.",
    tech: [
      "Solidity",
      "React",
      "Firebase",
      "Ethers.js",
      "Remix",
      "Bootstrap",
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
];