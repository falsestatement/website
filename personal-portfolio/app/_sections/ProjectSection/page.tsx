import styles from "./page.module.css";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
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
        "The website you are currently viewing, using industry standard practices, CI/CD, and automated cloud infrastructure deployment through using Terraform deployment onto AWS web services.",
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
  return (
    <section className={styles["projects-section"]}>
      <h4 className={styles.heading}> Project Gallery </h4>
      <div className={styles["projects-grid"]}>
        <ProjectCard
          className={styles.riscvcpu}
          project={projects.riscvcpu}
          bodyStyle={styles["riscvcpu-body-style"]}
        />
        <ProjectCard
          className={styles.netcap}
          project={projects.netcap}
          bodyStyle={styles["netcap-body-style"]}
        />
        <ProjectCard
          className={styles.hfttrader}
          project={projects.hfttrader}
          bodyStyle={styles["hfttrader-body-style"]}
        />
        <ProjectCard
          className={styles.portfolio}
          project={projects.portfolio}
          bodyStyle={styles["portfolio-body-style"]}
        />
        <ProjectCard
          className={styles.hwplatformer}
          project={projects.hwplatformer}
          bodyStyle={styles["hwplatformer-body-style"]}
        />
        <ProjectCard
          className={styles.osutcg}
          project={projects.osutcg}
          bodyStyle={styles["osutcg-body-style"]}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
