import styles from "./scss/m_main_yelloment.module.scss";

const MobileMainYelloment = () => {
  return (
    <section className={styles["yelloment-section"]}>
      <div className={styles["section-title"]}>
        <img src="/images/pandac/main/yelloment_logo.png" alt="엘로먼트 로고" />
        <h2>옐로먼트</h2>
        <span> 라이프스타일 농산물 온라인 쇼핑몰</span>
      </div>
      <div className={styles["section-body"]}>
        <div className={styles["text-group"]}>
          <p>
            다양한 상품 기획, 구성을 통해 <br />
            고객의 라이프스타일에 맞게 농산물을 제공합니다.
          </p>
          <p>자사몰, 쿠팡, 네이버등 다양한 채널에서 서비스를 제공합니다.</p>
          <p>과일, 식품등 다양한 상품으로 라이브커머스를 진행합니다.</p>
        </div>
      </div>
      <div className={styles["yelloment-link"]}>
        <a href="https://m.yelloment.co.kr/">옐로먼트 바로가기</a>
      </div>
      {/* <div className={styles["swiper yelloment-subSwiper">
        <div className={styles["swiper-wrapper">
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment1.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment3.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment4.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment5.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment6.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment7.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment8.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment10.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment11.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment12.png" alt="옐로우먼트" />
          </div>
          <div className={styles["swiper-slide">
            <img src="./images/main/yelloment13.png" alt="옐로우먼트" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default MobileMainYelloment;
