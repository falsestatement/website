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

import { scrollTo } from "@util/MainGSAP";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { ReactLenis } from "lenis/react";

import { useRef, useEffect } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const contextSafeError = () =>
    console.error("unable to acquire contextSafe.");

  const { contextSafe } = useGSAP((_, contextSafe) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

    gsap.from(navbarRef.current, {
      y: "-100%-=2em",
      autoAlpha: 0,
      delay: 1,
    });

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
      },
    });
  });

  const scrollToHero = scrollTo({
    target: heroRef,
    offset: 0,
    contextSafe,
  });

  const scrollToAbout = scrollTo({
    target: aboutRef,
    offset: 150,
    contextSafe,
  });

  const scrollToProject = scrollTo({
    target: projectRef,
    offset: 150,
    contextSafe,
  });

  const scrollToExperience = scrollTo({
    target: experienceRef,
    offset: 150,
    contextSafe,
  });

  const scrollToContact = scrollTo({
    target: contactRef,
    offset: 0,
    contextSafe,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const offscreenRef = useRef<OffscreenCanvas | null>(null);
  useEffect(() => {
    if (!canvasRef.current || offscreenRef.current) {
      return;
    }
    workerRef.current = new Worker(
      new URL("@util/BackgroundRender.ts", import.meta.url),
    );
    offscreenRef.current = canvasRef.current.transferControlToOffscreen();
    workerRef.current.postMessage(
      {
        canvas: offscreenRef.current,
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      },
      [offscreenRef.current],
    );
  }, []);

  return (
    <ReactLenis root options={{ duration: 0.7 }}>
      <header className={styles.header}>
        <nav ref={navbarRef} className={styles.navbar}>
          <div className={styles.hamburger}>
            <HamburgerIcon />
          </div>
          <ul className={styles.nav}>
            <li className="nav-link-home">
              <button className={styles["nav-link"]} onClick={scrollToHero}>
                Home
              </button>
            </li>
            <li className="nav-link-about">
              <button className={styles["nav-link"]} onClick={scrollToAbout}>
                About
              </button>
            </li>
            <li className="nav-link-project">
              <button className={styles["nav-link"]} onClick={scrollToProject}>
                Projects
              </button>
            </li>
            <li className="nav-link-experience">
              <button
                className={styles["nav-link"]}
                onClick={scrollToExperience}
              >
                Experience
              </button>
            </li>
            <li className="nav-link-contact">
              <button className={styles["nav-link"]} onClick={scrollToContact}>
                Contact Me
              </button>
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <a href="https://www.linkedin.com/in/adrianpccheng/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/falsestatement">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://gitlab.engr.illinois.edu/acheng27">
                <GitLabIcon />
              </a>
            </li>
            <li>
              <a href="mailto:contact@adrian-cheng.com">
                <EmailIcon />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <canvas
          ref={canvasRef}
          width={1000}
          height={1000}
          className={styles.canvas}
          onMouseMove={(e) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect)
              workerRef.current?.postMessage({
                mousePos: [e.clientX - rect.left, e.clientY - rect.top],
              });
          }}
        >
          background image
        </canvas>
        <HeroSection onProjectClick={scrollToProject} ref={heroRef} />
        <AboutSection ref={aboutRef} />
        <ProjectSection ref={projectRef} />
        <ExperienceSection ref={experienceRef} />
        <ContactSection ref={contactRef} />
      </main>
      <footer className={styles.footer}>
        Copyright © 2024 Adrian Cheng - All Rights Reserved
      </footer>
    </ReactLenis>
  );
}
