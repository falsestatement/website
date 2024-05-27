import styles from "./page.module.css";
import LinkedInIcon from "@icon/LinkedInIcon";
import GitHubIcon from "@icon/GitHubIcon";
import GitLabIcon from "@icon/GitLabIcon";
import EmailIcon from "@icon/EmailIcon";
import HamburgerIcon from "@icon/HamburgerIcon";

import HeroSection from "@app/HeroSection/page";
import AboutSection from "@app/AboutSection/page";
export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.hamburger}>
            <HamburgerIcon />
          </div>
          <ul className={styles.nav}>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Project Gallery</a>
            </li>
            <li>
              <a>Professional Experience</a>
            </li>
            <li>
              <a>Contact Me</a>
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <GitHubIcon />
            </li>
            <li>
              <GitLabIcon />
            </li>
            <li>
              <EmailIcon />
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.meshGradientBg}>
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
