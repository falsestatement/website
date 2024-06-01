import styles from "./page.module.css";
import TechSkillIcon from "@icon/TechSkillIcon";
import Image from "next/image";
import { forwardRef } from "react";

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  const techSkills = [
    "c",
    "csharp",
    "cplusplus",
    "java",
    "python",
    "javascript",
    "typescript",
    "systemverilog",
    "assembly",
    "golang",
    "html",
    "css",
    "reactjs",
    "nextjs",
    "socketio",
    "aws",
    "jenkins",
    "githubactions",
    "vagrant",
    "docker",
    "terraform",
    "mysql",
    "postgresql",
    "synopsis",
  ];

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
        <h6 className={styles["skills-subheading"]}>Technical Skills</h6>
        <ul className={styles["skills-list"]}>
          {techSkills.map((skill) => (
            <li key={`${skill}-icon`}>
              <TechSkillIcon variant={skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default AboutSection;
