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
    title: "American International School of Medicine (AISM)",
    position: "Web Developer",
    time: "Oct. 2024 - Present",
    location: "Alpharetta, US (Remote)",
    description: "As a Web Developer for AISM, I am responsible for enhancing the school's online presence by developing and maintaining a responsive, user-friendly website that supports student engagement and information accessibility. My work involves implementing modern front-end technologies and optimizing the site for performance. I collaborate with the AISM team to ensure the platform is aligned with their goals in delivering a seamless online experience for students, faculty, and prospective students.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Sirv",
      "React"
    ]
  },
  {
    title: "Supervision Company",
    position: "AppSheet Developer",
    time: "Sept. 2024 - Present",
    location: "New Jersey, US (Remote)",
    description: "As an AppSheet Developer at Supervision Company, I develop and manage custom applications to streamline business operations and improve data accessibility across teams. My role involves creating data-driven workflows and interfaces that empower users to interact with complex datasets easily. I work closely with stakeholders to design intuitive solutions that meet specific business needs, leveraging AppSheet's low-code capabilities for rapid development. This includes automating processes, enhancing user experience, and integrating apps seamlessly with Supervision's existing systems.",
    tech: [
      "AppSheet",
      "Google Sheets",
      "JavaScript",
      "Google Apps Script",
      "Google Workspace",
      "APIs"
    ]
  },
  {
    title: "Cold Hubs Limited",
    position: "Backend Developer",
    time: "Aug. 2024 - Present",
    location: "Nigeria",
    description: "As a Backend Developer at Cold Hubs Limited, I am responsible for building and maintaining robust backend systems that support the company's cold storage and logistics solutions. I work closely with the team to implement efficient APIs and handle the business logic for features like cold storage bookings, logistics services, and user management. My role involves ensuring data integrity, system scalability, and seamless integration with the frontend. I also contribute to optimizing the company's internal workflows through the development of custom backend solutions.",
    tech: [
      "Laravel",
      "PHP",
      "Figma",
      "MySQL",
      "Git",
      "GitHub",
      "DigitalOcean",
      "Mail Gun"
    ]
  },
  {
    title: "Digital Skills Empowerment Program (DSEP)",
    position: "Frontend Development Tutor",
    time: "Sept. 2023 - Aug. 2024",
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
    title: "OffrCloud",
    position: "Part-Time Remote Blockchain Developer",
    time: "Dec. 2022 - July. 2023",
    location: "Atlanta, US (Remote)",
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
