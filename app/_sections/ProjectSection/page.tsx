"use client";
import styles from "./page.module.css";
import ProjectCard from "./ProjectCard";
import { forwardRef, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const ProjectSection = forwardRef<HTMLElement>((_, ref) => {
  const projects = {
    riscvcpu: {
      title: "RISC-V PROCESSOR",
      description:
        "A 32-bit single core pipelined processor with 3 layers of parameterized cache.  Supporting RV32I instructions with hazard detection and data forwarding for executing an average of 0.38 instructions per cycle.",
      tags: ["Hardware", "RTL Design", "System Verilog", "RISC-V", "Synopsis"],
      img: "riscvcpu.png",
    },
    hwplatformer: {
      title: "FPGA PLATFORMER",
      description:
        "Simple infinite side-scrolling platformer with a VGA interface for displaying video data, Audio support using I2C protocol, and a USB controller for keyboard control support.",
      tags: ["Hardware", "System Verilog", "I2C", "VGA"],
      img: "hwplatformer.png",
    },
    hfttrader: {
      title: "FPGA HIGH FREQUENCY TRADER",
      description:
        "Prototype HFT trader using the Alveo x3522 FPGA. Taking advantage of the onboard NIC for receiving FIX network packets and making trade decisions based on real data back tested on real world IEX DEEP historical data.",
      tags: ["Hardware", "RTL Design", "System Verilog", "Networking"],
      img: "hfttrader.png",
    },
    osutcg: {
      title: "OSU! TRADING CARD GAME",
      description:
        "Simple local web application with advanced CSS styling to create different holographic styles and animations for a dynamic card viewing experience whilst playing the game.",
      tags: ["Web App", "Tailwind CSS", "Next.js", "Typescript"],
      img: "osutcg.png",
    },
    portfolio: {
      title: "PERSONAL PORTFOLIO",
      description:
        "The website portfolio you are viewing is made with Next.js with GSAP animations, which is then deployed using Netlify.",
      tags: ["Web App", "Github Actions", "AWS", "Terraform"],
      img: "portfolio.png",
    },
    netcap: {
      title: "NETWORK CAPTURE ANALYSER",
      description:
        "Real time web application, meant to mimic the functionality of Corvil Analytics, displays latency data of several running virtual traders and exchanges as well as the ability to view individual trade packet data all following the FIX protocol.",
      tags: [
        "Web App",
        "Tailwind CSS",
        "Socket.io",
        "React.js",
        "C",
        "Python",
        "Typescript",
        "Nest.js",
        "Vagrant",
      ],
      img: "netcap.png",
    },
  };

  const sectionHeadingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<{ [key: string]: HTMLElement }>({});

  useGSAP(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    for (const project in projectRefs.current) {
      gsap.from(projectRefs.current[project], {
        scrollTrigger: {
          trigger: projectRefs.current[project],
          start: "top bottom",
          toggleActions: "restart none none none",
        },
        y: -50,
        opacity: 0,
        delay: 0.2,
      });
    }

    gsap.from(sectionHeadingRef.current, {
      scrollTrigger: {
        trigger: sectionHeadingRef.current,
        start: "top bottom",
        toggleActions: "restart none none none",
      },
      y: -50,
      opacity: 0,
      delay: 0.1
    });

  });

  return (
    <section ref={ref} className={styles["projects-section"]}>
      <h4 ref={sectionHeadingRef} className={styles.heading}>
        {" "}
        Project Gallery{" "}
      </h4>
      <div ref={gridRef} className={styles["projects-grid"]}>
        <ProjectCard
          ref={(el) => {
            projectRefs.current["riscvcpu"] = el!;
          }}
          className={styles.riscvcpu}
          project={projects.riscvcpu}
          bodyStyle={styles["riscvcpu-body-style"]}
        />
        <ProjectCard
          ref={(el) => {
            projectRefs.current["netcap"] = el!;
          }}
          className={styles.netcap}
          project={projects.netcap}
          bodyStyle={styles["netcap-body-style"]}
        />
        <ProjectCard
          ref={(el) => {
            projectRefs.current["hfttrader"] = el!;
          }}
          className={styles.hfttrader}
          project={projects.hfttrader}
          bodyStyle={styles["hfttrader-body-style"]}
        />
        <ProjectCard
          ref={(el) => {
            projectRefs.current["portfolio"] = el!;
          }}
          className={styles.portfolio}
          project={projects.portfolio}
          bodyStyle={styles["portfolio-body-style"]}
        />
        <ProjectCard
          ref={(el) => {
            projectRefs.current["hwplatformer"] = el!;
          }}
          className={styles.hwplatformer}
          project={projects.hwplatformer}
          bodyStyle={styles["hwplatformer-body-style"]}
        />
        <ProjectCard
          ref={(el) => {
            projectRefs.current["osutcg"] = el!;
          }}
          className={styles.osutcg}
          project={projects.osutcg}
          bodyStyle={styles["osutcg-body-style"]}
        />
      </div>
    </section>
  );
});

ProjectSection.displayName = "Project Section";

export default ProjectSection;
