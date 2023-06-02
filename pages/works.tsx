import Work from "@/comps/Work";
import styles from "@/styles/Works.module.scss";

const works = (): JSX.Element => {
  return (
    <div className={styles.works}>
      <Work year="2023" name="Fluuent" desc="example" />
      <Work year="2022" name="Favorite medium" desc="example" />
    </div>
  );
};

export default works;
