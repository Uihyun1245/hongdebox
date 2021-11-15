import styles from "./scss/main_service.module.scss";

const MainService = () => {
  return (
    <section className={styles["service-section"]}>
      <h3>서비스 플랫폼</h3>
      <div className={styles["service-group"]}>
        <div className={styles["serviceBox-group"]}>
          <div className={styles["service-box"]}>
            <div className={styles["serviceBox-title"]}>
              <h2>판다코퍼레이션</h2>
              <span>Panda Corporation</span>
            </div>
            <div className={styles["serviceBox-body"]}>
              <p>
                판다코퍼레이션은 다음과 같은 A to F 기술로 농산물 유통시장을
                혁신하는 농업기술 스타트업입니다.
              </p>
            </div>
            <div className={styles["serviceBox-footer"]}>
              <div className={styles["serviceBox-img"]}>
                <img
                  src="/images/pandac/main/padac_logo.png"
                  alt="판다코퍼레이션 로고"
                />
              </div>
              <div className={styles["serviceBox-link"]}>
                <a href="">
                  <img src="/images/pandac/main/right-arrow.png" alt="링크아이콘" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["service-box"]}>
            <div className={styles["serviceBox-title"]}>
              <h2>큐잇</h2>
              <span>Cueat</span>
            </div>
            <div className={styles["serviceBox-body"]}>
              <p>
                판다코퍼레이션은 다음과 같은 A to F 기술로 농산물 유통시장을
                혁신하는 농업기술 스타트업입니다.
              </p>
            </div>
            <div className={styles["serviceBox-footer"]}>
              <div className={styles["serviceBox-img"]}>
                <img src="/images/pandac/main/cueat_logo.png" alt="큐잇 로고" />
              </div>
              <div className={styles["serviceBox-link"]}>
                <a href="https://cueat.kr/web/main" target="_blank">
                  <img src="/images/pandac/main/right-arrow.png" alt="링크아이콘" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["serviceBox-group"]}>
          <div className={styles["service-box"]}>
            <div className={styles["serviceBox-title"]}>
              <h2>옐로먼트</h2>
              <span>Yelloment</span>
            </div>
            <div className={styles["serviceBox-body"]}>
              <p>
                판다코퍼레이션은 다음과 같은 A to F 기술로 농산물 유통시장을
                혁신하는 농업기술 스타트업입니다.
              </p>
            </div>
            <div className={styles["serviceBox-footer"]}>
              <div className={styles["serviceBox-img"]}>
                <img
                  src="/images/pandac/main/yelloment_logo.png"
                  alt="옐로우먼트 로고"
                />
              </div>
              <div className={styles["serviceBox-link"]}>
                <a href="https://yelloment.co.kr/" target="_blank">
                  <img src="/images/pandac/main/right-arrow.png" alt="링크아이콘" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles["service-box"]}>
            <div className={styles["serviceBox-title"]}>
              <h2>아그리파</h2>
              <span>Agripa</span>
            </div>
            <div className={styles["serviceBox-body"]}>
              <p>
                판다코퍼레이션은 다음과 같은 A to F 기술로 농산물 유통시장을
                혁신하는 농업기술 스타트업입니다.
              </p>
            </div>
            <div className={styles["serviceBox-footer"]}>
              <div className={styles["serviceBox-img"]}>
                <img src="/images/pandac/main/agripa_logo.png" alt="아그리파 로고" />
              </div>
              <div className={styles["serviceBox-link"]}>
                <a href="http://agripa.kr/" target="_blank">
                  <img src="/images/pandac/main/right-arrow.png" alt="링크아이콘" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainService;
