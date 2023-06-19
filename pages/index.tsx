import Paragraphe from "@/comps/Paragraphe";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import WorksList from "./WorksLists";

export default function Home() {
  return (
    <>
      <div className={styles.home__container}>
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
