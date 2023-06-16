import styles from "@/styles/components/Work.module.scss";
import { Work } from "@/types/Work";
import EyeIcon from "./EyeIcon";
import { useState } from "react";
import WorkDetail from "./WorkDetail";

const Work = ({ year, name, desc }: Work): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const expandWork = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={styles.work}>
      <div
        onClick={expandWork}
        className={expanded ? styles.work__expanded : styles.work__container}
      >
        <div className={styles.work__column}>{year}</div>
        <div className={styles.work__column}>{name}</div>
        <div className={styles.work__column}>{desc}</div>
        <div className={styles.work__column}>
          <EyeIcon />
        </div>
        <WorkDetail />
      </div>
    </div>
  );
};

export default Work;
