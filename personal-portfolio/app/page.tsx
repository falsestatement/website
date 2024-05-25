import styles from "./page.module.css";
import HeroSection from "@app/HeroSection/page";
import LinkedInIcon from "@icon/LinkedInIcon";
import GitHubIcon from "@icon/GitHubIcon";
import GitLabIcon from "@icon/GitLabIcon";
import EmailIcon from "@icon/EmailIcon";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.nav}>
          <a>Home</a>
          <a>About Me</a>
          <a>Project Gallery</a>
          <a>Professional Experience</a>
          <a>Contact Me</a>
        </div>
        <div className={styles.socials}>
          <LinkedInIcon />
          <GitHubIcon />
          <GitLabIcon />
          <EmailIcon />
        </div>
      </nav>
      <HeroSection />
    </main>
  );
}
