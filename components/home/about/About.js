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
            Hey there! I&apos;m Favour Tochukwu Ajokubi, but you can just call me Favour. I'm a frontend developer hailing from Nigeria, and I'm thrilled to welcome you to my portfolio website.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I currently work for OFFRCloud as a web3 developer, where I&apos;ve built their landing page, DApp system, and smart contracts for tokens, token sales, and dividend management. While I&apos;m not an artist like Bob, I do have a passion for crafting beautiful digital experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I believe in the power of merging code and design seamlessly. With my background in graphic design, I bring a strong sense of aesthetics and user-centered design principles to my development projects.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            Beyond my professional endeavors, I find inspiration in art and enjoy exploring my creative side through graphic design. I&apos;m always on the lookout for exciting projects where I can blend my love for code with my eye for design.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            If you think there&apos;s an opportunity where my frontend development skills and passion for aesthetics could make an impact, I&apos;d love to connect with you.
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
