"use client";

import styles from "./page.module.css";
import SendIcon from "@icon/SendIcon";
import { forwardRef } from "react";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors}
  } = useForm<Inputs>({
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const msg = {
      to: "contact@adrian-cheng.com",
      from: "contact@adrian-cheng.com",
      replyTo: data.email,
      subject: `[PORTFOLIO CONTACT] ${data.name} (${data.company ? data.company : "No Company"}) - ${data.subject}`.substring(0, 255),
      text: data.message
    };
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(msg)
    });

    if(res.status !== 200) {
      alert("Message could not be sent at this moment, please contact directly through email, or try again later.")
    } else {
      alert("Message has been sent successfully!")
      reset();
    }
  }

  const [
    name, email,
    company, subject,
    message
  ] = watch([
    "name", "email",
    "company", "subject",
    "message"
  ]);

  return (
    <section ref={ref} className={styles["contact-section"]}>
      <h4>Contact Me</h4>
      <form className={styles["contact-grid"]} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={
              name?.length || errors.name
                ? errors.name ? styles["error-input"] : styles["active-input"]
                : styles["inactive-input"]
            }
            type="text"
            {...register("name", { required: true })}
          />
          <label
            className={
              name?.length
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
              email?.length || errors.email
                ? errors.email ? styles["error-input"] : styles["active-input"]
                : styles["inactive-input"]
            }
            type="text"
            {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
          />
          <label
            className={
              email?.length
                ? errors.email ? styles["error-label"] : styles["active-label"]
                : styles["inactive-label"]
            }
          >
            Email*
          </label>
        </div>
        <div>
          <input
            className={
              company?.length
                ? styles["active-input"]
                : styles["inactive-input"]
            }
            type="text"
            {...register("company")}
          />
          <label
            className={
              company?.length
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
              subject?.length || errors.subject
                ? errors.subject ? styles["error-input"] : styles["active-input"]
                : styles["inactive-input"]
            }
            type="text"
            {...register("subject", { required: true })}
          />
          <label
            className={
              subject?.length
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
              message?.length || errors.message
                ? [errors.message ? styles["error-input"] : styles["active-input"], styles.message].join(" ")
                : [styles["inactive-input"], styles.message].join(" ")
            }
            {...register("message", { required: true })}
          />
          <label
            className={
              message?.length
                ? styles["active-label"]
                : styles["inactive-label"]
            }
          >
            Message*
          </label>
        </div>
        <div className={styles["submit-container"]}>
          <p className={styles["email"]}>contact@adrian-cheng.com</p>
          <button type="submit" className={styles.send}>
            Send <SendIcon />
          </button>
        </div>
      </form>
    </section>
  );
});

ContactSection.displayName = "Contact Section";

export default ContactSection;
