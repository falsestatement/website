import styles from "./page.module.css";
import TechSkillIcon from "@icon/TechSkillIcon";
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
      <div className={styles.photo}>Professional Photo Here</div>
      <h4 className={styles.description}>
        A master’s student with interest in RTL design, programming, 3D
        modeling, and finance.
      </h4>
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
