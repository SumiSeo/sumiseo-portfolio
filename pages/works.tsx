import Work from "@/comps/Work";
import styles from "@/styles/Works.module.scss";

const works = (): JSX.Element => {
  return (
    <div className={styles.works}>
      <Work />
      <Work />
    </div>
  );
};

export default works;
