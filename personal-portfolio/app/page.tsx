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

import { ReactLenis } from "lenis/react";
import Delaunator from "delaunator";
import tinygradient from "tinygradient";

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
            offsetY: 250,
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
            y:
              projectRef.current !== null
                ? projectRef.current
                : ".nav-link-home",
            offsetY: 150,
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
            y:
              experienceRef.current !== null
                ? experienceRef.current
                : ".nav-link-home",
            offsetY: 150,
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
            y:
              contactRef.current !== null
                ? contactRef.current
                : ".nav-link-home",
            offsetY: 0,
            autoKill: true,
          },
          duration: scrollToDuration,
          ease: "power3",
        });
      })
    : contextSafeError;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Random Point Generation
  const randomVectors = (
    numberOfPoints: number,
    xMin: number,
    xMax: number,
    yMin: number,
    yMax: number,
  ) => {
    const result = [];
    for (let i = 0; i < numberOfPoints; i++) {
      result.push({
        x: Math.random() * (xMax - xMin) + xMin,
        y: Math.random() * (yMax - yMin) + yMin,
      });
    }

    return result;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;

    const drawWidth = canvas.width;
    const drawHeight = canvas.height;

    const numPoints = 50;
    const minVelocity = -0.1;
    const maxVelocity = 0.1;
    const borderOffset = 300;

    const points = randomVectors(
      numPoints,
      -borderOffset,
      drawWidth + borderOffset,
      -borderOffset,
      drawHeight + borderOffset,
    );
    const velocities = randomVectors(
      numPoints,
      minVelocity,
      maxVelocity,
      minVelocity,
      maxVelocity,
    );

    const drawTriangle = (pointIndexes: number[]) => {
      const trianglePoints = pointIndexes.map((index) => [
        points[index].x,
        points[index].y,
      ]);

      const normYPos = Math.min(
        Math.max(
          (trianglePoints[0][1] + trianglePoints[1][1] + trianglePoints[2][1]) /
            3 /
            drawHeight,
          0,
        ),
        1,
      );

      const triangleGradient = tinygradient(
        "rgba(0, 255, 255, 0.3)",
        "rgba(0, 0, 255, 0)",
      );

      ctx.beginPath();
      ctx.moveTo(trianglePoints[0][0], trianglePoints[0][1]);
      ctx.lineTo(trianglePoints[1][0], trianglePoints[1][1]);
      ctx.lineTo(trianglePoints[2][0], trianglePoints[2][1]);
      ctx.closePath();
      ctx.fillStyle = triangleGradient.hsvAt(normYPos).toRgbString();
      ctx.strokeStyle = triangleGradient.hsvAt(normYPos).toRgbString();
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fill();
    };

    const movePoints = () => {
      for (let i = 0; i < numPoints; i++) {
        const newX = points[i].x + velocities[i].x;
        const newY = points[i].y + velocities[i].y;
        points[i] = {
          x:
            newX > drawWidth + borderOffset
              ? newX - borderOffset - drawWidth
              : newX < -borderOffset
                ? newX + drawWidth + borderOffset
                : newX,
          y:
            newY > drawHeight + borderOffset
              ? newY - borderOffset - drawHeight
              : newY < -borderOffset
                ? newY + drawHeight + borderOffset
                : newY,
        };
      }
    };

    const renderPoints = () => {
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      movePoints();

      const triangles = Delaunator.from(
        points,
        (point: { x: number; y: number }) => point.x,
        (point: { x: number; y: number }) => point.y,
      ).triangles.reduce(
        (accum: number[][], cur: number, index: number) =>
          (index % 3 ? accum[accum.length - 1].push(cur) : accum.push([cur])) &&
          accum,
        [],
      );

      for (let i = 0; i < triangles.length; i++) {
        drawTriangle(triangles[i]);
      }

      requestAnimationFrame(renderPoints);
    };
    
    requestAnimationFrame(renderPoints);
  }, []);

  return (
    <ReactLenis root options={{ duration: 0.7 }}>
      <header className={styles.header}>
        <nav ref={navbarRef} className={styles.navbar}>
          <div className={styles.hamburger}>
            <HamburgerIcon />
          </div>
          <ul className={styles.nav}>
            <li onClick={scrollToHero} className="nav-link-home">
              Home
            </li>
            <li onClick={scrollToAbout} className="nav-link-about">
              About
            </li>
            <li onClick={scrollToProject} className="nav-link-project">
              Projects
            </li>
            <li onClick={scrollToExperience} className="nav-link-experience">
              Experience
            </li>
            <li onClick={scrollToContact} className="nav-link-contact">
              Contact Me
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
