import styles from "@/styles/components/Work.module.scss";

const Work = (): JSX.Element => {
  return (
    <div className={styles.work__container}>
      <div className={styles.work__column}>2019</div>
      <div className={styles.work__column}>Cayas</div>
      <div className={styles.work__column}>Identity, website</div>
      <div className={styles.work__column}>emoji</div>
    </div>
  );
};

export default Work;
