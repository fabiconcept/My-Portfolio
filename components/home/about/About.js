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
              Hey there! I&apos;m Favour Tochukwu Ajokubi, but you can just call me Favour. I&apos;m a versatile Frontend and Backend Developer from Nigeria, passionate about creating impactful digital experiences for web and mobile applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently, I&apos;m a Backend Developer at Cold Hubs, where I contribute to innovative technology solutions that support sustainable cold storage and logistics in Nigeria. With a strong foundation in both frontend and backend development, I&apos;ve also gained industry experience in Banking and Finance with CashGo as a Next.js Backend Developer and Senior Frontend Developer, as well as in Education Technology with the American International School of Medicine (AISM), where I enhanced their web presence as a Web Developer on a contract basis.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              As part of my commitment to open&mdash;source development, I recently released my first npm package, Mono API, designed to simplify interactions with Mono&apos;s financial API for developers working on financial applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              With a background in graphic design, I aim to merge code and aesthetics to build digital products that are both highly functional and visually compelling. My expertise includes JavaScript, TypeScript, React, Next.js, and Solidity, and I&apos;m always on the lookout for exciting projects where I can apply my skills to make a meaningful impact.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you&apos;re looking for a developer with a well&mdash;rounded skill set and a passion for crafting exceptional digital experiences, let&apos;s connect!
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
