import Paragraphe from "@/comps/Paragraphe";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import WorksList from "./WorksLists";

export default function Home() {
  return (
    <>
      <div className={styles.home__container}>
        <div className={styles.hiddenMsg}>
          <p>Find me in the bigger screen.</p>
          <p>좀 더 큰 화면에서 절 찾아주세요. </p>
        </div>

        <div className={styles.home__column}>
          <Paragraphe />
        </div>
        <div className={styles.home__column}>
          <WorksList />
        </div>
      </div>
    </>
  );
}
