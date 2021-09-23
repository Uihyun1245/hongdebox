import styles from "./scss/main_intro.module.scss";

const MainIntro = () => {
  return (
    <section className={styles["intro-section"]}>
      <div className={styles["intro-title"]}>
        <strong>PANDA CORPERATION</strong>
        <h1>
          기술과 농업의 결합 <br />
          차세대 농산물 유통시장을 만들어 갑니다.
        </h1>
      </div>
      <div className={styles["intro-body"]}>
        <div className={styles["introBox-group"]}>
          <div className={styles["intro-box"]}>
            <div className={styles["box-text"]}>
              <strong>Product & Service</strong>
              <div className={styles["text-group"]}>
                <p>농산물 빅데이터 플랫폼 '아그리파'</p>
                <p>농산물 구독 서비스 플랫폼 '큐잇'</p>
                <p>프리미엄 농산물 온라인 마켓 '옐로먼트'</p>
              </div>
            </div>
            <div className={styles["box-img"]}>
              <img src="/images/pandac/main/main_box.jpg" alt="메인 박스이미지" />
            </div>
          </div>
          <div className={styles["intro-box"]}>
            <div className={styles["box-text"]}>
              <strong>Technologies & Data</strong>
              <div className={styles["text-group"]}>
                <p>상이한 농산물 분류 체계의 '수집 및 전처리' 통합 솔루션</p>
                <p>딥러닝 LSTM 모델링 기반의 '농산물 가격예측' 솔루션</p>
              </div>
            </div>
            <div className={styles["box-img"]}>
              <img src="/images/pandac/main/main_box2.jpg" alt="메인 박스이미지" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIntro;
