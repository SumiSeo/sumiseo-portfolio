import styles from "@/styles/components/Paragraphe.module.scss";

const Paragraphe = (): JSX.Element => {
  return (
    <div className={styles.paragraphe}>
      Hi, I am <span className={styles.oblique}>SUMI</span> and I am a software
      engineer. <br />
      <br />I am proficient in both Front-End and Back-End language using C, C#,
      Python, TypeScript, React, Flutter and third-party APIs.
    </div>
  );
};

export default Paragraphe;
