import styles from "./scss/cueat_content.module.scss";
const CueatContent = ({ content }) => {
  const { title, text, imgTitle, imgPath, imgCnt } = content;
  const ImgList = () => {
    const tmpList = [];
    for (let i = 0; i < imgCnt; i++) {
      tmpList.push(
        <img 
          src={`${imgPath}${i + 1}.jpg`}
          alt={`${imgTitle}${i + 1}`}
          key={`${imgTitle}${i}`}
        />
      );
    }
    return tmpList;
  };
  return (
    <div className={styles["cueat-content"]}>
      <h3>{title}</h3>
      {text.split("\n").map((row, index) => {
        return (
          <p key={`cueat-paragraph${index}`}>
            {row}
            <br></br>
          </p>
        );
      })}
      {imgCnt !== 0 && (
        <div className={styles["image-box"]}>
          <ImgList></ImgList>
        </div>
      )}
    </div>
  );
};

export default CueatContent;
