import Work from "@/comps/Work";
import styles from "@/styles/Works.module.scss";

const works = (): JSX.Element => {
  return (
    <>
      <div className={styles.works}>
        <div className={styles.head}>
          <div className={styles.text}>Year</div>
          <div className={styles.text}>Company</div>
          <div className={styles.text}>Projects</div>
          <div className={styles.text}></div>
        </div>
      </div>
      <div>
        <div>
          <Work year="2023" name="Fluuent" desc="example" />
          <Work year="2022" name="Favorite medium" desc="example" />
        </div>
      </div>
    </>
  );
};

export default works;
