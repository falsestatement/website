import styles from "./page.module.css";
import CircuitLeft from "./CircuitLeft";
import CircuitRight from "./CircuitRight";
import { forwardRef, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ExperienceSection = forwardRef<HTMLElement>((_, ref) => {
  const experienceHistory = [
    {
      endDate: "Aug 2024",
      startDate: "Jun 2024",
      organization: "Pegatron Corporation",
      position: "Artificial Intelligence / Machine Learning Lead Intern",
      description: "Managed a team of 9 interns in the development of an automatic issue tracking system. Utilizing a custom in house LLM agent to automatically sort, manage, and generate statistics on a variety of issue tracking systems. The issue tracking assistant has placed within the top 5 within a company-wide AI innovation contest.",
    },
    {
      endDate: "May 2024",
      startDate: "Jan 2024",
      organization: "ROC Military",
      position: "Infantry Trainee",
      description: "4 month conscription within Taiwan.",
    },
    {
      endDate: "Dec 2023",
      startDate: "Dec 2022",
      organization: "John Deere Financial",
      position: "Intern Project Lead",
      description:
        "Lead a team of 6 through the development and deployment of a internal management application, allowing managers to more easily manage the access of their employees, saving over 37,000 USD worth of man hours in waiting for access changes to take effect.",
    },
    {
      endDate: "Dec 2022",
      startDate: "Aug 2022",
      organization: "John Deere Financial",
      position: "Full Stack Engineering Intern",
      description:
        "Added automatic incident ticket grouping through the use of ML as well as a frontend interface for our client to manage the groupings, decreasing the time spent on manual sorting and grouping from several days to minutes.",
    },
    {
      endDate: "May 2022",
      startDate: "Sep 2021",
      organization: "Grainger College of Engineering",
      position: "Multimedia Assistant",
      description:
        "Filmed and edited official college promotional and informational videos using professional filming equipment as well as editing in both Adobe Premiere Pro and After Effects.",
    },
    {
      endDate: "May 2021",
      startDate: "Jan 2021",
      organization: "Grainger College of Engineering",
      position: "Engineering Course Assistant",
      description:
        "Assisted 26 students in main course assignments as well as grading assignments throughout the semester.",
    },
  ];

  const gridRef = useRef<HTMLDivElement>(null);
  const sectionHeadingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.from(".date-container", {
      x: -100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.from(".job-content-container", {
      x: 200,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.from(sectionHeadingRef.current, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: sectionHeadingRef.current,
        start: "top bottom",
        toggleActions: "restart none none none",
      },
    });
  });

  return (
    <section ref={ref} className={styles["experience-section"]}>
      <div className={styles["circuit-lines"]}>
        <CircuitLeft className={styles["circuit-left"]} />
        <CircuitRight className={styles["circuit-right"]} />
      </div>
      <h4 ref={sectionHeadingRef}>Professional Experience</h4>
      <div ref={gridRef} className={styles["experience-grid"]}>
        {experienceHistory.map((job) => (
          <article
            key={`${job.organization}-${job.position}-article`}
            className={styles.job}
          >
            <div className={[styles.date, "date-container"].join(" ")}>
              <h6 className={styles.start}>{job.endDate.toUpperCase()}</h6>
              <div className={styles["date-line"]} />
              <h6 className={styles.end}>{job.startDate.toUpperCase()}</h6>
            </div>
            <div
              className={[styles.content, "job-content-container"].join(" ")}
            >
              <div className={styles["job-heading"]}>
                <h6>{job.organization}</h6>
                <p className={styles["small-date"]}>
                  <strong>
                    {job.startDate} - {job.endDate}
                  </strong>
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
});

ExperienceSection.displayName = "Experience Section";

export default ExperienceSection;
