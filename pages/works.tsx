import Work from "@/comps/Work";
import styles from "@/styles/Works.module.scss";
import WorkDetail from "@/comps/WorkDetail";

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
          <WorkDetail
            date="2023.02 - 2023.05"
            tech="C#, Blazor"
            title="Frontend Engineer"
          />
          <Work year="2022" name="Favorite medium" desc="example" />
          <WorkDetail
            date="2021.10 - 2022.12"
            tech="React, TypeScript, GraphQL, Flutter, AWS and third-party APIs "
            title="Software Engineer"
          />
        </div>
      </div>
    </>
  );
};

export default works;
