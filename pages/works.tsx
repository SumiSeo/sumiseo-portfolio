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
            company="Fluuent is a start-up based on Portland in the United States."
            project="Surgeons and medical practiciens invested to found the compay to solve actual problem in medical field. Improving referring system was the main objective.
            In R&D phase, we started to develop the application using Microsoft PowerApp Component Framework but enhacing communcation with BackEnd language had a roadblock. Microsoft PCF was not optimized to deal with C# language. Since handling data from client side was the main goal, so we changed the FrontEnd by developing C# and Blazor Framework."
          />
          <Work year="2022" name="Favorite medium" desc="Software Engineer" />
          <WorkDetail
            date="2021.10 - 2022.12"
            company="Favorite Medium is a singapore based company which outcome-focused agile teams to design, build and launch digital products."
            project="Developed AI-Concierge application from R&D phase "
          />
        </div>
      </div>
    </>
  );
};

export default works;
