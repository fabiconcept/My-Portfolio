import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              I build digital products that scale. I am Favour Tochukwu Ajokubi, a full stack developer working across frontend, backend, mobile, and blockchain.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work as a Software Developer at Imo Digital City Limited (IDCL) in partnership with the Ministry of Digital Economy, Imo State, where I lead the development of government digital platforms. I have built and deployed 35 government websites, digitizing operations across Imo State ministries and improving public access to essential services.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Previously, I worked as a Backend Developer at Cold Hubs Limited, building scalable Laravel APIs for cold storage logistics and warehouse operations. I have also gained experience across fintech and Web3, developing blockchain applications with smart contracts, wallet authentication, and token handling systems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              As part of my commitment to open source development, I have released npm packages including @useverse, a comprehensive React hooks library built with TypeScript for sound effects, keyboard shortcuts, and file downloads.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              With a Computer Science degree from Imo State University and a passion for building functional and visually compelling products, my core stack includes TypeScript, JavaScript, React, Next.js, Laravel, and Solidity. I am always looking for meaningful problems to solve.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you are looking for a developer who cares deeply about product quality, performance, and real world impact, let&apos;s connect.
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
