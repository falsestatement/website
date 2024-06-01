"use client";

import styles from "./page.module.css";
import SendIcon from "@icon/SendIcon";
import { useState, forwardRef } from "react";

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section ref={ref} className={styles["contact-section"]}>
      <h4>Contact Me</h4>
      <form className={styles["contact-grid"]}>
        <div>
          <input
            className={
              formState.name.length
                ? styles["active-input"]
                : styles["inactive-input"]
            }
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            value={formState.name}
          />
          <label
            className={
              formState.name.length
                ? styles["active-label"]
                : styles["inactive-label"]
            }
          >
            Name*
          </label>
        </div>
        <div>
          <input
            className={
              formState.email.length
                ? styles["active-input"]
                : styles["inactive-input"]
            }
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, email: e.target.value }))
            }
            type="text"
            value={formState.email}
          />
          <label
            className={
              formState.email.length
                ? styles["active-label"]
                : styles["inactive-label"]
            }
          >
            Email*
          </label>
        </div>
        <div>
          <input
            className={
              formState.company.length
                ? styles["active-input"]
                : styles["inactive-input"]
            }
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, company: e.target.value }))
            }
            type="text"
            value={formState.company}
          />
          <label
            className={
              formState.company.length
                ? styles["active-label"]
                : styles["inactive-label"]
            }
          >
            Company
          </label>
        </div>
        <div className={styles["subject-container"]}>
          <input
            className={
              formState.subject.length
                ? styles["active-input"]
                : styles["inactive-input"]
            }
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, subject: e.target.value }))
            }
            type="text"
            value={formState.subject}
          />
          <label
            className={
              formState.subject.length
                ? styles["active-label"]
                : styles["inactive-label"]
            }
          >
            Subject*
          </label>
        </div>
        <div className={styles["message-container"]}>
          <textarea
            className={
              formState.message.length
                ? [styles["active-input"], styles.message].join(" ")
                : [styles["inactive-input"], styles.message].join(" ")
            }
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, message: e.target.value }))
            }
            value={formState.message}
          />
          <label
            className={
              formState.message.length
                ? styles["active-label"]
                : styles["inactive-label"]
            }
          >
            Message*
          </label>
        </div>
        <div className={styles["submit-container"]}>
          <p className={styles["email"]}>contact@adrian-cheng.com</p>
          <button onClick={handleSubmit} type="submit" className={styles.send}>
            Send <SendIcon />
          </button>
        </div>
      </form>
    </section>
  );
});

export default ContactSection;
