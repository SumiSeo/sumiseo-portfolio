import Work from "@/comps/Work";
import styles from "@/styles/Works.module.scss";
import WorkDetail from "@/comps/WorkDetail";
import { useState } from "react";

const WorksList = (): JSX.Element => {
  const [expandedFluuent, setExpandedFluuent] = useState<boolean>(true);
  const [expandedFM, setExpandedFM] = useState<boolean>(true);
  const [expandedSchool, setExpandedSchool] = useState<boolean>(true);
  const [expandedSorbonne, setExpandedSorbonne] = useState<boolean>(true);

  const expandSorbonneDetail = () => {
    setExpandedSorbonne(!expandedSorbonne);
  };

  const expandFluuentWorkDetail = () => {
    setExpandedFluuent(!expandedFluuent);
  };

  const expandFMWorkDetail = () => {
    setExpandedFM(!expandedFM);
  };

  const expandSchoolDetail = () => {
    setExpandedSchool(!expandedSchool);
  };

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
        <div onClick={expandSorbonneDetail}>
          <Work
            year="2023"
            name="Sorbonne Paris North University"
            desc="Biomedical Engineering"
            icon={expandedSorbonne}
          />
          <div className={expandedSorbonne ? styles.hidden : ""}>
            <WorkDetail
              date="2023.09 - 2025.08"
              company="Sorbonne University is "
              project="Surgeons and medical practicians invested to found the company to improve referring systems in the medical field.
            In the R&D phase, we started to develop the application using Microsoft PowerApp Component Framework but enhancing communcation with Back-End language was a roadblock. Microsoft PCF is not optimized to deal with C# language. Since handling data from the client side was the main goal, we changed the Front-End by developing C# and Blazor Framework."
            />
          </div>
        </div>

        <div onClick={expandFluuentWorkDetail}>
          <Work
            year="2023"
            name="Fluuent"
            desc="Frontend Engineer"
            icon={expandedFluuent}
          />
          <div className={expandedFluuent ? styles.hidden : ""}>
            <WorkDetail
              date="2023.02 - 2023.05"
              company="Fluuent is a start-up based on Portland in the United States."
              project="Surgeons and medical practicians invested to found the company to improve referring systems in the medical field.
            In the R&D phase, we started to develop the application using Microsoft PowerApp Component Framework but enhancing communcation with Back-End language was a roadblock. Microsoft PCF is not optimized to deal with C# language. Since handling data from the client side was the main goal, we changed the Front-End by developing C# and Blazor Framework."
            />
          </div>
        </div>
        <div onClick={expandFMWorkDetail}>
          <Work
            icon={expandedFM}
            year="2021"
            name="Favorite Medium"
            desc="Software Engineer"
          />
          <div className={expandedFM ? styles.hidden : ""}>
            <WorkDetail
              date="2021.10 - 2022.12"
              company="Favorite Medium is a singapore based company which outcome-focused agile teams to design, build and launch digital products."
              project="I developed a real-time dashboard connected to the AI-Camera technology using React, TypeScript, Hasura-GraphQL, and AWS. Also, I developed a mobile application that provides electric car charger service with Flutter and GetX Pattern."
            />
          </div>
        </div>
        <div onClick={expandSchoolDetail}>
          <Work
            icon={expandedSchool}
            year="2013"
            name="Korea National University of Arts"
            desc="Film, TV and Multimedia"
          />
          <div className={expandedSchool ? styles.hidden : ""}>
            <WorkDetail
              date="2013.03 - 2018.02"
              company="Korea National University of Arts was established as the only national university of arts in Korea with an aim to serve as a leading institution which cultivates artists."
              project="Learned overall arts and created some artworks."
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default WorksList;
