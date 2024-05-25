import DownloadIcon from "@icon/DownloadIcon";
import Image from "next/image";
import styles from "./page.module.css";

const HeroSection = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.mainHeading}>ADRIAN CHENG</h1>
        <h5 className={styles.subHeading}>
          Developing the whole technology stack, all the way down to hardware.
        </h5>
        <button className={styles.resumeButton}>
          <DownloadIcon />
          Resume
        </button>
      </div>
      <Image
        style={{
          marginTop: "250px",
          marginLeft: "-150px",
          mixBlendMode: "color-dodge",
                    filter: "brightness(1.2)"
        }}
        src="/abstract-cpu-4.png"
        width={1600}
        height={1600}
        alt="Abstract CPU Image"
      />
    </main>
  );
};

export default HeroSection;
