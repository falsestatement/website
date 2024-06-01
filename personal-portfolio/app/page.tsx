"use client";
import styles from "./page.module.css";
import LinkedInIcon from "@icon/LinkedInIcon";
import GitHubIcon from "@icon/GitHubIcon";
import GitLabIcon from "@icon/GitLabIcon";
import EmailIcon from "@icon/EmailIcon";
import HamburgerIcon from "@icon/HamburgerIcon";

import HeroSection from "@section/HeroSection/page";
import AboutSection from "@section/AboutSection/page";
import ProjectSection from "@section/ProjectSection/page";
import ExperienceSection from "@section/ExperienceSection/page";
import ContactSection from "@section/ContactSection/page";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import {useRef} from 'react';

export default function Home() {
  
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useGSAP((_, contextSafe) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    gsap.to(".nav-link-home", {
      "--progress": "100%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onLeave: contextSafe
          ? contextSafe(() => {
              gsap.to(".nav-link-home", { "--progress": "200%" });
            })
          : () => console.error("unable to acquire contextSafe."),
      },
      ease: 'none'
    });
    gsap.to(".nav-link-about", {
      "--progress": "100%",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onLeave: contextSafe
          ? contextSafe(() => {
              gsap.to(".nav-link-about", { "--progress": "200%" });
            })
          : () => console.error("unable to acquire contextSafe."),
      },
      ease: 'none'
    });

    gsap.to(".nav-link-project", {
      "--progress": "100%",
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onLeave: contextSafe
          ? contextSafe(() => {
              gsap.to(".nav-link-project", { "--progress": "200%" });
            })
          : () => console.error("unable to acquire contextSafe."),
      },
      ease: 'none'
    });

    gsap.to(".nav-link-experience", {
      "--progress": "100%",
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onLeave: contextSafe
          ? contextSafe(() => {
              gsap.to(".nav-link-experience", { "--progress": "200%" });
            })
          : () => console.error("unable to acquire contextSafe."),
      },
      ease: 'none'
    });

    gsap.to(".nav-link-contact", {
      "--progress": "100%",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onLeave: contextSafe
          ? contextSafe(() => {
              gsap.to(".nav-link-contact", { "--progress": "200%" });
            })
          : () => console.error("unable to acquire contextSafe."),
      },
      ease: 'none'
    });
  });

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.hamburger}>
            <HamburgerIcon />
          </div>
          <ul className={styles.nav}>
            <li className="nav-link-home">
              <a>Home</a>
            </li>
            <li className="nav-link-about">
              <a>About</a>
            </li>
            <li className="nav-link-project">
              <a>Projects</a>
            </li>
            <li className="nav-link-experience">
              <a>Experience</a>
            </li>
            <li className="nav-link-contact">
              <a>Contact Me</a>
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <GitHubIcon />
            </li>
            <li>
              <GitLabIcon />
            </li>
            <li>
              <EmailIcon />
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.meshGradientBg}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
              <filter id="noise">
                <feTurbulence type="turbulence" baseFrequency="0.5" />
              </filter>
            </defs>
          </svg>
          <div className={styles["gradient-container"]}>
            <div className={styles.grad1} />
            <div className={styles.grad2} />
            <div className={styles.grad3} />
            <div className={styles.grad4} />
            <div className={styles.grad5} />
            <div className={styles.grad6} />
          </div>
          <HeroSection ref={heroRef}/>
          <AboutSection ref={aboutRef}/>
        </div>
        <ProjectSection ref={projectRef}/>
        <ExperienceSection ref={experienceRef}/>
        <ContactSection ref={contactRef}/>
      </main>
      <footer className={styles.footer}>
        Copyright © 2024 Adrian Cheng - All Rights Reserved
      </footer>
    </>
  );
}
