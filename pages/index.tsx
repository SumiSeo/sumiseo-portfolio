import Footer from "@/comps/Footer";
import Paragraphe from "@/comps/Paragraphe";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Work from "@/comps/Work";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.home__container}>
        <div className={styles.home__column}>
          <Paragraphe />
        </div>
        <div className={styles.home__column}>
          <Work />
        </div>
        <Footer />
      </div>
    </>
  );
}
