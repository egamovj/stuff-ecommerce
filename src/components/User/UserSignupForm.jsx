/* eslint-disable no-unused-vars */
import styles from "../../styles/User.module.css";

const UserSignupForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.close}>
        <svg>
          <path
            d="M4.375 4.375L15.625 15.625"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M4.375 15.625L15.625 4.375"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

      <div className={styles.title}>Sign Up</div>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value=""
            autoComplete="off"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="name"
            placeholder="Your name"
            name="name"
            value=""
            autoComplete="off"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value=""
            autoComplete="off"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.group}>
          <input
            type="avatar"
            placeholder="Your avatar"
            name="avatar"
            value=""
            autoComplete="off"
            onChange={() => {}}
            required
          />
        </div>

        <div className={styles.link}>I already have an account</div>

        <button type="submit" className={styles.submit}>
          Create an account
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
