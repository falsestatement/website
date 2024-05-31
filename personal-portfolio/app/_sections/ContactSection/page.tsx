import styles from "./page.module.css";
import SendIcon from "@icon/SendIcon";

const ContactSection = () => {
  return (
    <section className={styles["contact-section"]}>
      <h4>Contact Me</h4>
      <form className={styles["contact-grid"]}>
        <div>
          <label>Name*</label>
          <input type="text" />
        </div>
        <div>
          <label>Email*</label>
          <input type="text" />
        </div>
        <div>
          <label>Company</label>
          <input type="text" />
        </div>
        <div className={styles["subject-container"]}>
          <label>Subject*</label>
          <input type="text" />
        </div>
        <div className={styles["message-container"]}>
          <label>Message*</label>
          <textarea className={styles.message} />
        </div>
            <div className={styles["submit-container"]}>
                <p>contact@adrian-cheng.com</p>
                <button type="submit" className={styles.send}>
                    Send <SendIcon />
                </button>
            </div>
      </form>
    </section>
  );
};

export default ContactSection;
