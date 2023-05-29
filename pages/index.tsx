import Head from "next/head";
import Image from "next/image";
import Footer from "@/comps/Footer";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="home__container">
        <div className="home__column">
          <h1>
            Sumi is a software engineer working in designing, developing and
            solving real word problems.
          </h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
