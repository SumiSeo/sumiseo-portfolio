import styles from "@/styles/components/WorkDetail.module.scss";
import { WorkDetail } from "@/types/WorkDetail";

const WorkDetail = ({ date, tech }: WorkDetail): JSX.Element => {
  const tru = () => {
    // test
  };
  return (
    <div className={styles.detail}>
      <div className={styles.detail__column}>
        <p className={styles.date}>{date}</p>
        <span className={styles.explication}>where</span>
        <span className={styles.techonologie}>{tech}</span>
      </div>
    </div>
  );
};

export default WorkDetail;
