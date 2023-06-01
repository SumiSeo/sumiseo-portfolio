import styles from "@/styles/components/Work.module.scss";
import { Work } from "@/types/Work";
import CustomIcon from "./CustomIcon";

const Work = ({ year, name, desc }: Work): JSX.Element => {
  return (
    <div className={styles.work}>
      <div className={styles.work__container}>
        <div className={styles.work__column}>{year}</div>
        <div className={styles.work__column}>{name}</div>
        <div className={styles.work__column}>{desc}</div>
        <div className={styles.work__column}>
          <CustomIcon />
        </div>
      </div>
    </div>
  );
};

export default Work;
