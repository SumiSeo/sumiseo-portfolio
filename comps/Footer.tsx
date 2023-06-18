import styles from "@/styles/components/Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
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
  );
};

export default Footer;
