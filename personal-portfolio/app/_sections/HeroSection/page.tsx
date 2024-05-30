import DownloadIcon from "@icon/DownloadIcon";
import Image from "next/image";
import styles from "./page.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.title}>
        <h1 className={styles.mainHeading}>ADRIAN CHENG</h1>
        <h5 className={styles.subHeading}>
          Developing the whole technology stack, all the way down to hardware.
        </h5>
      </div>
      <button className={styles.resumeButton}>
        <DownloadIcon />
        <p>Resume</p>
      </button>
    </section>
  );
};

export default HeroSection;