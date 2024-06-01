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
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const contextSafeError = () =>
    console.error("unable to acquire contextSafe.");

  const { contextSafe } = useGSAP((_, contextSafe) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);
    gsap.to(".nav-link-home", {
      "--progress": "100%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true,
        onLeave: contextSafe
          ? contextSafe(() => {
              gsap.to(".nav-link-home", { "--progress": "200%" });
            })
          : contextSafeError,
      },
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
          : contextSafeError,
      },
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
          : contextSafeError,
      },
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
          : contextSafeError,
      },
    });

    gsap.to(".nav-link-contact", {
      "--progress": "100%",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
        end: "center-=70px center",
        scrub: true,
        onLeave: contextSafe
          ? contextSafe(() => {
              gsap.to(".nav-link-contact", { "--progress": "200%" });
            })
          : contextSafeError,
      },
    });
  });

  const scrollToDuration = 1;

  const scrollToHero = contextSafe
    ? contextSafe(() => {
        gsap.to(window, {
          scrollTo: {
            y: heroRef.current !== null ? heroRef.current : ".nav-link-home",
            offsetY: 0,
            autoKill: true,
          },
          duration: scrollToDuration,
          ease: "power3",
        });
      })
    : contextSafeError;

  const scrollToAbout = contextSafe
    ? contextSafe(() => {
        gsap.to(window, {
          scrollTo: {
            y: aboutRef.current !== null ? aboutRef.current : ".nav-link-home",
            offsetY: 0,
            autoKill: true,
          },
          duration: scrollToDuration,
          ease: "power3",
        });
      })
    : contextSafeError;

  const scrollToProject = contextSafe
    ? contextSafe(() => {
        gsap.to(window, {
          scrollTo: {
            y: projectRef.current !== null ? projectRef.current : ".nav-link-home",
            offsetY: 0,
            autoKill: true,
          },
          duration: scrollToDuration,
          ease: "power3",
        });
      })
    : contextSafeError;

  const scrollToExperience = contextSafe
    ? contextSafe(() => {
        gsap.to(window, {
          scrollTo: {
            y: experienceRef.current !== null ? experienceRef.current : ".nav-link-home",
            offsetY: 0,
            autoKill: true,
          },
          duration: scrollToDuration,
          ease: "power3",
        });
      })
    : contextSafeError;

  const scrollToContact = contextSafe
    ? contextSafe(() => {
        gsap.to(window, {
          scrollTo: {
            y: contactRef.current !== null ? contactRef.current : ".nav-link-home",
            offsetY: 0,
            autoKill: true,
          },
          duration: scrollToDuration,
          ease: "power3",
        });
      })
    : contextSafeError;
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.hamburger}>
            <HamburgerIcon />
          </div>
          <ul className={styles.nav}>
            <li className="nav-link-home">
              <a onClick={scrollToHero}>Home</a>
            </li>
            <li className="nav-link-about">
              <a onClick={scrollToAbout}>About</a>
            </li>
            <li className="nav-link-project">
              <a onClick={scrollToProject}>Projects</a>
            </li>
            <li className="nav-link-experience">
              <a onClick={scrollToExperience}>Experience</a>
            </li>
            <li className="nav-link-contact">
              <a onClick={scrollToContact}>Contact Me</a>
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
          <HeroSection ref={heroRef} />
          <AboutSection ref={aboutRef} />
        </div>
        <ProjectSection ref={projectRef} />
        <ExperienceSection ref={experienceRef} />
        <ContactSection ref={contactRef} />
      </main>
      <footer className={styles.footer}>
        Copyright © 2024 Adrian Cheng - All Rights Reserved
      </footer>
    </>
  );
}
