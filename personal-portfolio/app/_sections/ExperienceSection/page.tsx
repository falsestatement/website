import styles from "./page.module.css";
import CircuitLeft from "./CircuitLeft";
import CircuitRight from "./CircuitRight";
const ExperienceSection = () => {
  const experienceHistory = [
    {
      startDate: "May 2024",
      endDate: "Jan 2024",
      organization: "ROC Military",
      position: "Infantry Trainee",
      description: "4 month conscription within Taiwan.",
    },
    {
      startDate: "Dec 2023",
      endDate: "Aug 2022",
      organization: "John Deere Financial",
      position: "Full Stack Engineering Intern",
      description:
        "Created 2 internal applications, one for a AI based grouping system for incidents, and the other for employee management. The automation of several tasks done by these applications reduced 37,000 USD worth of man hours annually in managerial chores.",
    },
    {
      startDate: "May 2022",
      endDate: "Sep 2021",
      organization: "Grainger College of Engineering",
      position: "Multimedia Assistant",
      description:
        "Filmed and edited official college promotional and informational videos using professional filming equipment as well as editing in both Adobe Premiere Pro and After Effects.",
    },
    {
      startDate: "May 2021",
      endDate: "Jan 2021",
      organization: "Grainger College of Engineering",
      position: "Engineering Course Assistant",
      description:
        "Assisted 26 students in main course assignments as well as grading assignments throughout the semester.",
    },
  ];
  return (
    <section className={styles["experience-section"]}>
            <div className={styles["circuit-lines"]}>
                <CircuitLeft className={styles["circuit-left"]}/>
                <CircuitRight className={styles["circuit-right"]}/>
            </div>
      <h4>Professional Experience</h4>
      <div className={styles["experience-grid"]}>
        {experienceHistory.map((job) => (
          <article key={`${job.organization}-${job.position}-article`} className={styles.job}>
            <div className={styles.date}>
              <h6 className={styles.start}>{job.startDate.toUpperCase()}</h6>
              <div className={styles["date-line"]} />
              <h6 className={styles.end}>{job.endDate.toUpperCase()}</h6>
            </div>
            <div className={styles.content}>
              <div className={styles["job-heading"]}>
                <h6>{job.organization}</h6>
                <p className={styles["small-date"]}>
                  <strong>{job.startDate} - {job.endDate}</strong>
                </p>
                <p>
                  <strong>{job.position}</strong>
                </p>
              </div>
              <p>{job.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
