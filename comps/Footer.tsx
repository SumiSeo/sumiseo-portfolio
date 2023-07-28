import styles from "@/styles/components/Footer.module.scss";
import ArrowIcon from "./ArrowIcon";
import { useState } from "react";

const Footer = (): JSX.Element => {
  const [email, setEmail] = useState<boolean>(false);
  const [phone, setPhone] = useState<boolean>(false);
  const [paris, setParis] = useState<boolean>(false);
  const [instagram, setInstagram] = useState<boolean>(false);
  const showParis = () => {
    setPhone(false);
    setInstagram(false);
    setEmail(false);
    setParis(true);
  };
  const showEmail = () => {
    setPhone(false);
    setInstagram(false);
    setEmail(true);
    setParis(false);
  };
  const showPhone = () => {
    setPhone(true);
    setInstagram(false);
    setEmail(false);
    setParis(false);
  };
  const showInstagram = () => {
    setPhone(false);
    setInstagram(true);
    setEmail(false);
    setParis(false);
  };
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.box}>
          <span>Touch</span>
          <span onClick={showEmail}>Email</span>
          <div className={email ? styles.form : styles.hidden}>
            equepem@gmail.com
          </div>
          <span onClick={showPhone}>Phone</span>
          <div className={phone ? styles.form : styles.hidden}>
            +33 7 67 23 49 82
          </div>
          <span onClick={showInstagram}>DM</span>
          <div className={instagram ? styles.form : styles.hidden}>@ykilmm</div>
          <span onClick={showParis}>Address</span>
          <div className={paris ? styles.form : styles.hidden}>
            Paris, France
          </div>
        </div>
        <div className={styles.box}>
          <span>Watch</span>
          <a href="https://github.com/SumiSeo" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/sumiseo/" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.column}>{/* <ArrowIcon /> */}</div>
    </div>
  );
};

export default Footer;
