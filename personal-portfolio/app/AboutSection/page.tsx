import styles from "./page.module.css";
import TechSkillIcon from "@icon/TechSkillIcon";
import Image from "next/image";
const AboutSection = () => {
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
    <section className={styles["about-section"]}>
      <div className={styles.photo}>
        <Image src="/donotcommit/test.jpg" fill style={{objectFit: "cover", objectPosition: "50% 20%"}} alt="headshot.jpg" />
      </div>
      <div className={styles.description}>
        <p className={styles["description-short"]}>
          A Master’s student with passion in RTL design, programming, 3D
          modeling, and finance.
        </p>
        <p className={styles["description-long"]}>
          Hello! I am a master’s student attending the University of Illinois,
          Urbana Champaign, studying financial engineering. I have a wide range
          of interests, ranging from hardware layout and RTL design, all the way
          to web development, UI/UX design, and much more!
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
};

export default AboutSection;
