"use client";

import ResumeIcon from "@icon/ResumeIcon";
import ProjectsIcon from "@icon/ProjectsIcon";
import styles from "./page.module.css";
import { forwardRef, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = forwardRef<HTMLElement, {onProjectClick: () => void;}>(({onProjectClick}, ref) => {
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(useGSAP);
    gsap.from(mainHeadingRef.current, {
      y: -150,
      opacity: 0,
      autoAlpha:0,
      delay: 0.2
    });

    gsap.from(subHeadingRef.current, {
      y: -150,
      autoAlpha:0,
      opacity: 0,
    });
    
    gsap.from(buttonRef.current, {
      opacity: 0,
      autoAlpha:0,
      delay: 1,
    });
  });

  return (
    <section ref={ref} className={styles.heroSection}>
      <div className={styles.title}>
        <h1 ref={mainHeadingRef} className={styles.mainHeading}>
          ADRIAN CHENG
        </h1>
        <h5 ref={subHeadingRef} className={styles.subHeading}>
          Developing the whole technology stack, all the way down to hardware.
        </h5>
      </div>
      <div ref={buttonRef} className={styles["button-container"]}>
        <button onClick={onProjectClick} className={styles.viewButton}>
          <ProjectsIcon />
          <p>View My Projects</p>
        </button>
        <button className={styles.resumeButton}>
          <ResumeIcon />
          <p>Resume</p>
        </button>
      </div>
    </section>
  );
});

export default HeroSection;
