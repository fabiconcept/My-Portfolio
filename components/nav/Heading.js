import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.filter_ios}></div>
      <MyLinks />
      <OutlineButton onClick={() => window.open("/fabiconcept_cv.pdf")}>
        My resume
      </OutlineButton>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <filter id="lensFilter" x="-50%" y="-50%" width="200%" height="150%" filterUnits="objectBoundingBox">
          <feComponentTransfer in="SourceAlpha" result="alpha">
            <feFuncA type="identity" />
          </feComponentTransfer>

          {/* Blur for smooth displacement */}
          <feGaussianBlur in="alpha" stdDeviation="40" result="blur" />

          {/* Top displacement - push content down */}
          <feOffset in="blur" dx="0" dy="-30" result="topBlur" />

          {/* Bottom displacement - push content up */}
          <feOffset in="blur" dx="0" dy="30" result="bottomBlur" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="bottomBlur"
            scale="60"
            xChannelSelector="A"
            yChannelSelector="A"
            result="bottomDisplace"
          />

          {/* Blend both displacements */}
          <feBlend mode="normal" in="topDisplace" in2="bottomDisplace" />
        </filter>
      </svg>
    </header>
  );
};
