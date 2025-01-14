import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React Native</span>
            <span className="chip">Clerk Auth</span>
            <span className="chip">Neon DB</span>
            <span className="chip">Zustand</span>
            <span className="chip">TypeScript</span>
            <span className="chip">JavaScript</span>
            <span className="chip">NextJS</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">CSS</span>
            <span className="chip">HTML</span>
            <span className="chip">EtherJs</span>
            <span className="chip">Firebase</span>
            <span className="chip">GitHub</span>
            <span className="chip">Vercel</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">Solidity</span>
            <span className="chip">Next Rest API</span>
            <span className="chip">Remix</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Figma</span>
            <span className="chip">Digital Ocean</span>
            <span className="chip">Laravel</span>
            <span className="chip">Appsheet</span>
            <span className="chip">AppScript</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PHP</span>
            <span className="chip">MySQl</span>
            <span className="chip">Photoshop</span>
            <span className="chip">Netlify</span>
            <span className="chip">Web3 JS</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
