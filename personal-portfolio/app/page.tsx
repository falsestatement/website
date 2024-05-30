import styles from "./page.module.css";
import LinkedInIcon from "@icon/LinkedInIcon";
import GitHubIcon from "@icon/GitHubIcon";
import GitLabIcon from "@icon/GitLabIcon";
import EmailIcon from "@icon/EmailIcon";
import HamburgerIcon from "@icon/HamburgerIcon";

import HeroSection from "@section/HeroSection/page";
import AboutSection from "@section/AboutSection/page";
import ProjectSection from "@section/ProjectSection/page";

export default function Home() {
    return (
        <>
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
            <main className={styles.main}>
                <div className={styles.meshGradientBg}>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="blur"
                                />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                    result="goo"
                                />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>
                    <div className={styles["gradient-container"]}>
                        <div className={styles.grad1} />
                        <div className={styles.grad2} />
                        <div className={styles.grad3} />
                        <div className={styles.grad4} />
                        <div className={styles.grad5} />
                        <div className={styles.grad6} />
                    </div>
                    <HeroSection />
                    <AboutSection />
                </div>
                <ProjectSection />
            </main>
        </>
    );
}
