import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
     <div className={styles.left}>
        <p className={styles.heading}>
        Our resume<span> help to</span>  
        </p>
        <p className={styles.heading}>
          get job at top  <span>companies</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;