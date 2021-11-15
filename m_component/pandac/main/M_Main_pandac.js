import styles from "./scss/m_main_pandac.module.scss";
const MobileMainPandac = () => {
  return (
    <section className={styles["pandac-section"]}>
      <div className={styles["section-title"]}>
        <img
          src="/images/pandac/main/padac_logo.png"
          alt="판다코퍼레이션 로고"
        />
        <h2>판다코퍼레이션</h2>
        <span>글로벌 농산물 유통</span>
      </div>
      <div className={styles["section-body"]}>
        <h3>
          농산물 유통 전반에 걸쳐 발생하는 <br />
          환경 / 사회 / 경제 문제를 해결을 목표로 합니다.
        </h3>
      </div>
      <img
        src="/images/pandac/main/padac_introduce2.jpg"
        alt="판다코퍼레이션 메인이미지"
      />
    </section>
  );
};

export default MobileMainPandac;
