import styles from "@/styles/components/Work.module.scss";
import { Work } from "@/types/Work";
import EyeIcon from "./EyeIcon";
import { useState } from "react";

const Work = ({ year, name, desc, expanded }: Work): JSX.Element => {
  return (
    <div className={styles.work}>
      <div
        className={expanded ? styles.work__expanded : styles.work__container}
      >
        <div className={styles.work__column}>{year}</div>
        <div className={styles.work__column}>{name}</div>
        <div className={styles.work__column}>{desc}</div>
        <div className={styles.work__column}>
          <EyeIcon />
        </div>
      </div>
    </div>
  );
};

export default Work;
