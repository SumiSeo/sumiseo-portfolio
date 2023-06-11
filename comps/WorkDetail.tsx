import styles from "@/styles/components/WorkDetail.module.scss";

const WorkDetail = (): JSX.Element => {
  return (
    <div className={styles.detail}>
      <div className={styles.description}>Desc</div>
      <div className={styles.technologie}>Tec</div>
      <div className={styles.image}>iaamge</div>
    </div>
  );
};

export default WorkDetail;
