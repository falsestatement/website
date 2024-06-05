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

  const borderPoints = (
    subdivisions: number,
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
  ) => {
    let result = [];
    for (let i = 0; i < subdivisions + 1; i++) {
      result.push({
        x: minX + ((maxX - minX) * i) / (subdivisions + 1),
        y: minY,
      });
      result.push({
        x: maxX,
        y: minY + ((maxY - minY) * i) / (subdivisions + 1),
      });
      result.push({
        x: maxX - ((maxX - minX) * i) / (subdivisions + 1),
        y: maxY,
      });
      result.push({
        x: minX,
        y: maxY - ((maxY - minY) * i) / (subdivisions + 1),
      });
    }

    return result;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawWidth = canvas.width;
    const drawHeight = canvas.height;

    const numPoints = 50;
    const minVelocity = -0.5;
    const maxVelocity = 0.5;

    const points = randomVectors(numPoints, 0, drawWidth, 0, drawHeight);
    const border = borderPoints(5, 0, drawWidth, 0, drawHeight);
    const delaunay = Delaunator.from([...points, ...border], (p) => p.x, (p) => p.y);

    const velocities = randomVectors(
      numPoints,
      minVelocity,
      maxVelocity,
      minVelocity,
      maxVelocity,
    );

    const drawTriangle = (
      pointIndexes: number[],
    ) => {
      const trianglePoints = pointIndexes.map((index) => [
        delaunay.coords[2*index],
        delaunay.coords[2*index+1],
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
      const newPoints = [];
      for (let i = 0; i < numPoints; i++) {
        const newX = delaunay.coords[i*2] + velocities[i].x;
        const newY = delaunay.coords[i*2+1] + velocities[i].y;
        if (newX < 0 || newX > drawWidth) velocities[i].x = -velocities[i].x;
        if (newY < 0 || newY > drawHeight) velocities[i].y = -velocities[i].y;
        newPoints[i*2] = delaunay.coords[i*2] + velocities[i].x;
        newPoints[i*2 + 1] = delaunay.coords[i*2+1] + velocities[i].y;
      }
      delaunay.coords = [...newPoints, ...border.flatMap((p) => [p.x, p.y])];
    };

    const renderPoints = () => {
      ctx.clearRect(0, 0, drawWidth, drawHeight);
      movePoints();
      delaunay.update();

      const triangles = delaunay.triangles.reduce(
        (accum, cur, index) =>
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
