import styles from "./scss/m_main_agripa.module.scss";

const MobileMainAgripa = () => {
  return (
    <section className={styles["agripa-section"]}>
      <div className={styles["section-title"]}>
        <img src="/images/pandac/main/agripa_logo.png" alt="엘로먼트 로고" />
        <h2>아그리파</h2>
        <span> 농산물 빅데이터 솔루션</span>
      </div>
      <div className={styles["section-body"]}>
        <div className={styles["text-group"]}>
          <p>실시간 농산물 품목별 도소매 가격정보를 수집, 분석, 시각화</p>
          <p>농산물 관련 언론 기사 수집, 분석, 시각화</p>
          <p>포털, SNS에서 농산물 관련 정보 수집, 분석, 시각화</p>
          <p>농산물, 농식품 관련 회사의 데이터 베이스의 수집, 분석, 시각화</p>
        </div>
      </div>
      <div className={styles["agripa-link"]}>
        <a href="http://agripa.kr/">아그리파 바로가기</a>
      </div>
      {/* <div className={styles["swiper agripa-subSwiper"]}>
        <div className={styles["swiper-wrapper"]}>
          <div className={styles["swiper-slide"]}>
            <img src="./images/main/agripa1.png" alt="아그리파" />
          </div>
          <div className={styles["swiper-slide"]}>
            <img src="./images/main/agripa3.png" alt="아그리파" />
          </div>
          <div className={styles["swiper-slide"]}>
            <img src="./images/main/agripa4.png" alt="아그리파" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default MobileMainAgripa;
