import styles from "@/styles/components/Paragraphe.module.scss";

const Work = (): JSX.Element => {
  return (
    <div className={styles.work__container}>
      <div className={styles.work__column}></div>
      <div className={styles.work__column}></div>
      <div className={styles.work__column}></div>
      <div className={styles.work__column}></div>
    </div>
  );
};

export default Work;
