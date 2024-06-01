import styles from "./page.module.css";
import TechSkillIcon from "@icon/TechSkillIcon";
import Image from "next/image";
import { forwardRef, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  const techSkills = [
    { variant: "c", name: "C" },
    { variant: "csharp", name: "C#" },
    { variant: "cplusplus", name: "C++" },
    { variant: "java", name: "Java" },
    { variant: "python", name: "Python" },
    { variant: "javascript", name: "JavaScript" },
    { variant: "typescript", name: "TypeScript" },
    { variant: "systemverilog", name: "SystemVerilog" },
    { variant: "assembly", name: "Assembly (x86, RISC-V)" },
    { variant: "golang", name: "Golang" },
    { variant: "html", name: "HTML" },
    { variant: "css", name: "CSS" },
    { variant: "reactjs", name: "React.js" },
    { variant: "nextjs", name: "Next.js" },
    { variant: "socketio", name: "Socket.io" },
    { variant: "aws", name: "AWS Web Services" },
    { variant: "jenkins", name: "Jenkins" },
    { variant: "githubactions", name: "Github Actions" },
    { variant: "vagrant", name: "Vagrant" },
    { variant: "docker", name: "Docker" },
    { variant: "terraform", name: "Terraform" },
    { variant: "mysql", name: "MySQL" },
    { variant: "postgresql", name: "PostgreSQL" },
    { variant: "synopsis", name: "Synopsis Toolchain" },
  ];

  const headingRefs = useRef<HTMLHeadingElement[]>([]);
  const defaultHeadingRef = useRef<HTMLHeadingElement>(null);

  const { contextSafe } = useGSAP(() => {
    gsap.registerPlugin(useGSAP);
  });

  const showOnHover = contextSafe((headingRef: HTMLHeadingElement) => {
    gsap.fromTo(
      defaultHeadingRef.current,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.1,
      },
    );

    gsap.fromTo(
      headingRef,
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
      },
    );
  });

  const hideOnLeave = contextSafe((headingRef: HTMLHeadingElement) => {
    gsap.fromTo(
      headingRef,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 0.1,
      },
    );
    gsap.fromTo(
      defaultHeadingRef.current,
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
      },
    );
  });

  return (
    <section ref={ref} className={styles["about-section"]}>
      <Image
        src="/angle.jpg"
        width={887}
        height={1330}
        priority
        style={{ objectFit: "cover", objectPosition: "50% 10%" }}
        className={styles.photo}
        alt="headshot.jpg"
      />
      <div className={styles.description}>
        <p className={styles["description-short"]}>
          A Master’s student with passion in RTL design, programming, 3D
          modeling, and finance.
        </p>
        <p className={styles["description-long"]}>
          Hello! I am a master’s student attending the University of Illinois,
          studying financial engineering. I have a wide range of interests,
          ranging from hardware layout and RTL design, all the way to web
          development, 3D modeling, and much more!
        </p>
      </div>
      <div className={styles.skills}>
        <div className={styles["skills-subheading-container"]}>
          <h6
            ref={defaultHeadingRef}
            className={styles["skills-default-subheading"]}
          >
            Technical Skills
          </h6>
          {techSkills.map((skill, index) => (
            <h6
              ref={(el) => {
                headingRefs.current[index] = el!;
              }}
              key={`${skill.variant}-heading`}
              className={styles["skills-subheading"]}
            >
              {skill.name}
            </h6>
          ))}
        </div>
        <ul className={styles["skills-list"]}>
          {techSkills.map((skill, index) => (
            <li
              onMouseEnter={() => showOnHover(headingRefs.current[index])}
              onMouseLeave={() => hideOnLeave(headingRefs.current[index])}
              key={`${skill.variant}-icon`}
            >
              <TechSkillIcon variant={skill.variant} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default AboutSection;
