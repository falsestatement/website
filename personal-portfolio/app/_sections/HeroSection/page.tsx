import DownloadIcon from "@icon/DownloadIcon";
import Image from "next/image";
import styles from "./page.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        width={1200}
        height={800}
        src="/abstract-cpu-5.png"
        style={{ objectFit: "cover" }}
        className={styles.image}
        alt="Abstract CPU Image"
                priority
      />
      <div className={styles.title}>
        <h1 className={styles.mainHeading}>ADRIAN CHENG</h1>
        <h5 className={styles.subHeading}>
          Developing the whole technology stack, all the way down to hardware.
        </h5>
      </div>
      <button className={styles.resumeButton}>
        <DownloadIcon />
        Resume
      </button>
    </section>
  );
};

export default HeroSection;
