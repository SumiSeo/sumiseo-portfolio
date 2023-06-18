import styles from "@/styles/components/Work.module.scss";
import { Work } from "@/types/Work";
import EyeIcon from "./EyeIcon";
import ClosedEyeIcon from "./ClosedEyeIcon";

const Work = ({ year, name, desc, icon }: Work): JSX.Element => {
  return (
    <>
      <div className={styles.work}>
        <div className={styles.work__expanded}>
          <div className={styles.work__column}>{year}</div>
          <div className={styles.work__column}>{name}</div>
          <div className={styles.work__column}>{desc}</div>
          <div className={styles.work__column}>
            {icon ? <ClosedEyeIcon /> : <EyeIcon />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
