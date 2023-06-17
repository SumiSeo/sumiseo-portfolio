import styles from "@/styles/components/Paragraphe.module.scss";

const Paragraphe = (): JSX.Element => {
  return (
    <div className={styles.paragraphe}>
      Hi, I am a software engineer. <br />
      <br />I am proficient in both Front-End and Back-End language using C,
      Python, TypeScript, React, GraphQL and third-party APIs.
    </div>
  );
};

export default Paragraphe;
