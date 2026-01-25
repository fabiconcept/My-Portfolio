import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Favour<span>.</span>
          </h1>
        </Reveal>

        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m a <span>Software Engineer</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className={styles.aboutCopy}>
            I build and scale software across fintech, logistics, edtech, blockchain, and public sector platforms. Outside of work, I enjoy CSS art, UI design, building side projects, and supporting FC Barcelona.
          </p>
        </Reveal>

        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Let&apos;s Talk
          </StandardButton>
        </Reveal>
      </div>

      <DotGrid />
    </section>
  );
};
