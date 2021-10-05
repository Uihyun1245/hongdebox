import styles from "./scss/pandac_serviceLink.module.scss";

const PandacServiceLink = ({serviceName , linkPath}) => {
  return (
    <div className={styles["serviceHead-wrapper"]}>
      <div className={styles["service-head"]}>
        <h2>서비스 소개</h2>
        <div className={styles["service-link"]}>
          <a href={linkPath} target="_blank">
            <span>{serviceName} 바로가기</span>
            <img src="/images/pandac/common/right-arrow.png" alt="오른쪽 화살표아이콘" />
          </a>
        </div>
      </div>
    </div>
  );
};


export default PandacServiceLink