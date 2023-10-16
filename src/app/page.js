"use client";
import styles from "../app/page.module.css";
import logo from "../images/profile.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.profile}>
        <div className={styles.profileimg}>
          <Image className={styles.logo} src={logo} alt="img" />
        </div>

        <div className={styles.profiletitle}>
          <h3 className={styles.profilevalues}>User Name</h3>
          <br />
          <h4 className={styles.profilevalues}>User Email</h4>
        </div>

        <div className={styles.links}>
          <a className={styles.login} href="./pages/Login">
            Login
          </a>

          <a className={styles.form} href="./pages/Loginform">
            Create new Landing Page
          </a>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.collection}>
        <h5>My Collections</h5>
      </div>
    </div>
  );
}
