import styles from "@/styles/components/WorkDetail.module.scss";
import { WorkDetail } from "@/types/WorkDetail";

const WorkDetail = ({ date, company, project }: WorkDetail): JSX.Element => {
  return (
    <div className={styles.detail}>
      <div className={styles.detail__column}>
        <p className={styles.date}>{date}</p>
        <span className={styles.explication}>Where</span>
        <span className={styles.company}>{company}</span>
        <br />
        <span className={styles.explication}>What</span>
        <span className={styles.techonologie}>{project}</span>
      </div>
    </div>
  );
};

export default WorkDetail;
