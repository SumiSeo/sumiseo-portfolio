import Work from "@/comps/Work";
import styles from "@/styles/Works.module.scss";

const works = (): JSX.Element => {
  return (
    <>
      <div className={styles.works}>
        <div className={styles.head}>
          <div className={styles.text}>When</div>
          <div className={styles.text}>Where</div>
          <div className={styles.text}>What</div>
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
