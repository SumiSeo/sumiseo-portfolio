import styles from "@/styles/components/Paragraphe.module.scss";

const Paragraphe = (): JSX.Element => {
  return (
    <div className={styles.paragraphe}>
      Hi, my name is Sumi. I am a software engineer. <br />
      <br />I am proficient in both Frontend and Backend language using C,
      Python, Typescript, React, GraphQL and third-party APIs.
    </div>
  );
};

export default Paragraphe;
