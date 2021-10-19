import styles from './scss/m_main_intro.module.scss';
const MobileMainIntro = () => {
  return (
    <div className={styles["main-section"]}>
      <strong>PANDA CORPORATION</strong>
      <h1>
        농업과 기술의 융합, <br />
        농산물 유통시장의 디지털 전환
      </h1>
      <div className={styles["main-box"]}>
        <div className={styles["box-text"]}>
          <strong>Product & Service</strong>
          <p>농산물 빅데이터 플랫폼 '아그리파'</p>
          <p>농산물 구독 서비스 플랫폼 '큐잇'</p>
          <p>프리미엄 농산물 온라인 마켓 '옐로먼트'</p>
        </div>
        <div className={styles["box-img"]}>
          <img src="/images/pandac/main/main_box.jpg" alt="메인 박스 이미지" />
        </div>
      </div>
      <div className={styles["main-box"]}>
        <div className={styles["box-text"]}>
          <strong>Technologies & Data</strong>
          <p>상이한 농산물 분류 체계의 '수집 및 전처리' 통합 솔루션</p>
          <p>딥러닝 LSTM 모델링 기반의 '농산물 가격예측' 솔루션</p>
        </div>
        <div className={styles["box-img"]}>
          <img src="/images/pandac//main/main_box2.jpg" alt="메인 박스 이미지" />
        </div>
      </div>
    </div>
  );
};

export default MobileMainIntro;
