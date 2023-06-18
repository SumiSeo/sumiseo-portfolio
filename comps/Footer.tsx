import styles from "@/styles/components/Footer.module.scss";
import ArrowIcon from "./ArrowIcon";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.box}>
          <span>Contact</span>
          <span>Email</span>
          <span>Phone</span>
          <span>DM</span>
        </div>
        <div className={styles.box}>
          <span>Watch</span>
          <span>Github</span>
          <span>LinkedIn</span>
        </div>
      </div>
      <div className={styles.column}>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Footer;
