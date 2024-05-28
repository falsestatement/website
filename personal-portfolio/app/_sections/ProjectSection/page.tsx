import styles from "./page.module.css";

const ProjectSection = () => {
    const projects = [
        {
            emphasize: 1,
            col: 1,
            row: 1,
            title: "RISC-V PROCESSOR",
            description:
                "A 32-bit single core pipelined processor with 3 layers of parameterized cache.  Supporting RV32I instructions with hazard detection and data forwarding for executing an average of 0.38 instructions per cycle.",
            tags: ["Hardware", "RTL Design", "System Verilog", "RISC-V", "Synopsis"],
        },
        {
            title: "FPGA PLATFORMER",
            description:
                "Simple infinite side-scrolling platformer with a VGA interface for displaying video data, Audio support using I2C protocol, and a USB controller for keyboard control support.",
            tags: ["Hardware", "System Verilog", "I2C", "VGA"],
        },
        {
            title: "FPGA HIGH FREQUENCY TRADER",
            description:
                "Prototype HFT trader using the Alveo x3522 FPGA. Taking advantage of the onboard NIC for receiving FIX network packets and making trade decisions based on real data back tested on real world IEX DEEP historical data.",
            tags: ["Hardware", "RTL Design", "System Verilog", "Networking"],
        },
        {
            title: "OSU! TRADING CARD GAME",
            description:
                "Simple local web application with advanced CSS styling to create different holographic styles and animations for a dynamic card viewing experience whilst playing the game.",
            tags: ["Web App", "Tailwind CSS", "Next.js", "Typescript"],
        },
        {
            title: "PERSONAL PORTFOLIO",
            description:
                "The website you are currently viewing, using industry standard practices, CI/CD, and automated cloud infrastructure deployment through using Terraform deployment onto AWS web services.",
            tags: ["Web App", "Github Actions", "AWS", "Terraform"],
        },
        {
            emphasize: 1,
            col: 2,
            row: 3,
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
        },
    ];
    return (
        <section className={styles["projects-section"]}>
            <h4 className={styles.heading}> Project Gallery </h4>
            <div className={styles["projects-grid"]}>
                {projects.map((project) => (
                    <article
                        style={
                            project.emphasize
                                ? {
                                    gridRow: `${project.row} / span 2`,
                                    gridColumn: `${project.col} / span 2`,
                                }
                                : {}
                        }
                        className={styles.project}
                        key={`${project.title}-card`}
                    >
                        <div>
                            <h5 className={styles["project-title"]}>{project.title}</h5>
                            <p className={styles["project-description"]}>
                                {project.description}
                            </p>
                        </div>
                        <div className={styles["project-tags"]}>
                            {project.tags.map((tag) => (
                                <div className={styles["project-tag"]} key={`${tag}-tag`}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
