import styles from "./scss/pandac_topsection.module.scss";
const PandacTopSection = ({ imgPath, title }) => {
  return (
    <div className={styles["top-section"]}>
      <div className={styles["overlay"]}></div>
      <img src={imgPath} alt={`${title} intro image`} />
      <h1>{title}</h1>
    </div>
  );
};

export default PandacTopSection;
