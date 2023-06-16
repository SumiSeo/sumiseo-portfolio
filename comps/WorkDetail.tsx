import styles from "@/styles/components/WorkDetail.module.scss";
import { WorkDetail } from "@/types/WorkDetail";

const WorkDetail = ({ date, tech, title }: WorkDetail): JSX.Element => {
  const tru = () => {
    // test
  };
  return (
    <div className={styles.detail}>
      <div className={styles.detail__column}>
        <p className={styles.paragraph}>{date}</p>
        <p className={styles.paragraph}>{title}</p>
        <p className={styles.paragraph}>{tech}</p>
      </div>
    </div>
  );
};

export default WorkDetail;
