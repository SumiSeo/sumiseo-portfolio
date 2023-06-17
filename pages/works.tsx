import Work from "@/comps/Work";
import styles from "@/styles/Works.module.scss";
import WorkDetail from "@/comps/WorkDetail";
import { useState } from "react";
import exp from "constants";

const works = (): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);
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
          <Work year="2021" name="Favorite Medium" desc="Software Engineer" />
        </div>
      </div>
    </>
  );
};

export default works;
