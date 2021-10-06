import styles from  "./scss/agripa_content.module.scss";
const AgripaContent = ({content}) => {
  const { title, textList, imgPath, imgCnt, imgType } = content;
  const TextList = () => {
    const tmpList = [];
    for (let i = 0, len = textList.length; i < len; i++) {
      const text = textList[i];
      tmpList.push(<p key={`yelloment-text${i}`}>{text}</p>);
    }
    return tmpList;
  };
  const ImgList = () => {
    const tmpList = [];
    for (let n = 0; n < imgCnt; n++) {
      tmpList.push(
        <img
          src={`${imgPath}${n + 1}.${imgType}`}
          alt="yelloment-content images"
          key={`yelloment-contentImg${n + 1}`}
        />
      );
    }
    return tmpList;
  };
  return (
    <div className={styles["agripa-content"]}>
      <div className={styles["content-introduce"]}>
        <h3>{title}</h3>
        <div className={styles["text-group"]}>
          <TextList></TextList>
        </div>
      </div>
      <div className={styles["contentImg-list"]}>
        <ImgList></ImgList>
      </div>
    </div>
  );
};


export default AgripaContent;