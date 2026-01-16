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
              I currently work as a Backend Developer at Cold Hubs, where I help build technology solutions supporting sustainable cold storage and logistics across Nigeria. I have also gained experience in fintech and edtech, working with CashGo as a Next.js backend and senior frontend developer, and with the American International School of Medicine (AISM) as a contract web developer.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              As part of my commitment to open source development, I have released npm packages including Mono API, built to simplify integration with Mono&apos;s financial APIs for developers building financial products.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              With a background in graphic design, I enjoy merging strong visual thinking with solid engineering to build products that are both functional and visually compelling. My core stack includes JavaScript, TypeScript, React, Next.js, and Solidity, and I am always looking for meaningful problems to solve.
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
