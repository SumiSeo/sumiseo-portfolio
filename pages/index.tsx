import Footer from "@/comps/Footer";
import Paragraphe from "@/comps/Paragraphe";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Works from "./works";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.home__container}>
        <div className={styles.home__column}>
          <Paragraphe />
        </div>
        <div className={styles.home__column}>
          <Works />
        </div>
        <Footer />
      </div>
    </>
  );
}
