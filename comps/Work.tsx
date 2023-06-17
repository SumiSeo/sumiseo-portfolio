import styles from "@/styles/components/Work.module.scss";
import { Work } from "@/types/Work";
import EyeIcon from "./EyeIcon";
import { useState, useRef } from "react";
import WorkDetail from "./WorkDetail";

const Work = ({ year, name, desc }: Work): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean | null>(false);
  const expandWorkDetail = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div className={styles.work}>
        <div onClick={expandWorkDetail} className={styles.work__expanded}>
          <div className={styles.work__column}>{year}</div>
          <div className={styles.work__column}>{name}</div>
          <div className={styles.work__column}>{desc}</div>
          <div className={styles.work__column}>
            <EyeIcon />
          </div>
        </div>
        <div className={expanded ? styles.hidden : ""}>
          <WorkDetail
            date="2023.02 - 2023.05"
            company="Fluuent is a start-up based on Portland in the United States."
            project="Surgeons and medical practiciens invested to found the compay to solve actual problem in medical field. Improving referring system was the main objective.
            In R&D phase, we started to develop the application using Microsoft PowerApp Component Framework but enhacing communcation with BackEnd language was a roadblock. Microsoft PCF was not optimized to deal with C# language. Since handling data from client side was the main goal, so we changed the FrontEnd by developing C# and Blazor Framework."
          />
        </div>
        <div>
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

export default Work;
