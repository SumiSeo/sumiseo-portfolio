import styles from "@/styles/components/WorkDetail.module.scss";
import ArrowIcon from "./ArrowIcon";

const WorkDetail = (): JSX.Element => {
  const tru = () => {
    // test
  };
  return (
    <div className={styles.detail}>
      <div className={styles.detail__column}>
        <p className={styles.paragraph}>2023.02</p>
      </div>
      <div className={styles.detail__column}>
        <p className={styles.paragraph}>2023.02</p>
      </div>
      <div className={styles.detail__column}>
        <p className={styles.paragraph}>2023.02</p>
      </div>
    </div>
  );
};

export default WorkDetail;
