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
          <Work year="2023" name="Fluuent" desc="Frontend Engineer" />
          <WorkDetail
            date="2023.02 - 2023.05"
            tech="  Fluuent is a start-up based on Portland in the United States. Surgeons and medical practiciens invested to found the compay to solve actual problem in medical field. Improving referring system was the main objective.
            In R&D phase, we started to develop the application using Microsoft PowerApp Component Framework but enhacing communcation with BackEnd language has a roadblock. So we changed the FrontEnd by developing C# and Blazor Framework.
            "
          />
          <Work year="2022" name="Favorite medium" desc="Software Engineer" />
          <WorkDetail
            date="2021.10 - 2022.12"
            tech="React, TypeScript, GraphQL, Flutter, AWS and third-party APIs "
          />
        </div>
      </div>
    </>
  );
};

export default works;
