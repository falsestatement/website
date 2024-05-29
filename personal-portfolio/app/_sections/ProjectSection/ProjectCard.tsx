import styles from "./ProjectCard.module.css";
import { ProjectType } from "@type/ProjectType";
import Image from "next/image";

const ProjectCard = ({
  className,
  project,
  bodyStyle,
}: {
  className?: string;
  project: ProjectType;
  bodyStyle?: string;
}) => {
  return (
    <article className={[styles.card, className].join(" ")}>
      <Image
        src={`/projects/${project.img}`}
        width={1080}
        height={1080}
        style={{
          objectFit: "cover",
        }}
        alt={project.img}
        className={styles.image}
      />
      <div className={[styles["image-filter"], bodyStyle].join(" ")} />
      <div className={[styles.main, bodyStyle].join(" ")}>
        <div>
          <h6 className={styles.title}>{project.title}</h6>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <div className={styles.tag} key={`${tag}-tag`}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
