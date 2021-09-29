import styles from "./scss/main_banner.module.scss";
const MainBanner = () => {
  return (
    <section className={styles["banner-section"]}>
      <div className={styles["banner-text"]}>
        <h3>
          <span>PANDA CORPORATION</span>은<br /> 농업의 융복합, 빅데이터,
          인공지능 기술을 통한디지털 혁신을 통해 다양한 문제들을
          <br /> 하나씩 해결하여 농산물 유통시장의 차세대 주자가 되고자 합니다.
        </h3>
      </div>
    </section>
  );
};

export default MainBanner;
