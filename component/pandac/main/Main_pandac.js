import styles from "./scss/main_pandac.module.scss";
const MainPandac = () => {
  return (
    <section className={styles["pandac-section"]}>
      <div className={styles["pandac-title"]}>
        <img src="/images/pandac/main/padac_logo.png" alt="판다코퍼레이션 로고" />
        <h2>판다코퍼레이션</h2>
        <strong>글로벌 농산물 유통</strong>
      </div>
      <div className={styles["pandac-body"]}>
        <div className={styles["pandac-text"]}>
          <div className={styles["text-group"]}>
            <h3>MISSION</h3>
            <p>가격 폭락에 따른 산지 폐기</p>
            <p>자연재해에 따른 농작물 피해</p>
            <p>수요 예측 실패에 따른 상품 폐기</p>
            <p>운송, 보고나 중 손실분 재고 폐기</p>
            <p>불필요한 대량 구매로 과소비 강제</p>
            <p>음식물 쓰레기와 처리 비용 발생</p>
          </div>
          <h4>
            농산물 유통 전반에 걸쳐 발생하는
            <br />
            환경 / 사회 / 경제 문제를 해결을 목표로 합니다.
          </h4>
        </div>
        <div className={styles["padac-img"]}>
          <img
            src="/images/pandac/main/padac_introduce.jpg"
            alt="판다코러페이션 소개사진"
          />
        </div>
      </div>
    </section>
  );
};

export default MainPandac;
