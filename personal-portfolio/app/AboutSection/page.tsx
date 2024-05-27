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
    <section>
      <div className={styles.photo}>Professional Photo Here</div>
      <h4>
        A master’s student with interest in RTL design, programming, 3D
        modeling, and finance.
      </h4>

      <h6>Technical Skills</h6>
      <ul>
        {techSkills.map((skill) => (
          <li key={`${skill}-icon`}>
            <TechSkillIcon variant={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;
