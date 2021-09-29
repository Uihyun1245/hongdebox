import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./scss/main_yelloment.module.scss";

import SwiperCore, { Autoplay, EffectFade } from "swiper";

SwiperCore.use([Autoplay, EffectFade]);

const MainYelloment = () => {
  const yellomentSubSwiper = () => {
    const tmpSlide = [];
    for (let i = 0; i < 13; i++) {
      tmpSlide.push(
        <SwiperSlide
          className={styles["yelloment-slide"]}
          key={`yelloment-subSwiper${i}`}
        >
          <img
            src={`/images/pandac/main/yelloment${i + 1}.png`}
            alt="yelloment-subSwiper"
          />
        </SwiperSlide>
      );
    }
    return tmpSlide;
  };

  const yellomentSwiper = () => {
    const tmpSlide = [];
    for (let i = 0; i < 13; i++) {
      tmpSlide.push(
        <SwiperSlide
          className={styles["yelloment-mainSlide"]}
          key={`yelloment-subSwiper${i}`}
        >
          <img
            src={`/images/pandac/main/yelloment${i + 1}.png`}
            alt="yelloment-swiper"
          />
        </SwiperSlide>
      );
    }
    return tmpSlide;
  };

  return (
    <section className={styles["yelloment-section"]}>
      <div className={styles["yelloment-title"]}>
        <img
          src="/images/pandac/main/yelloment_logo.png"
          alt="옐로우먼트 로고"
        />
        <h2>옐로먼트</h2>
        <strong> 라이프스타일 농산물 온라인 쇼핑몰</strong>
      </div>
      <div className={styles["yelloment-body"]}>
        <div className={styles["yelloment-content"]}>
          <div className={styles["content-text"]}>
            <div className={styles["text-group"]}>
              <p>
                다양한 상품 기획, 구성을 통해 고객의 라이프스타일에 맞게
                농산물을 제공합니다.
              </p>
              <p>자사몰, 쿠팡, 네이버등 다양한 채널에서 서비스를 제공합니다.</p>
              <p>과일, 식품등 다양한 상품으로 라이브커머스를 진행합니다.</p>
            </div>
            <div className={styles["linkBtn"]}>
              <a href="https://yelloment.co.kr/" target="_blank">
                옐로먼트 바로가기
              </a>
            </div>
          </div>
          <div className={styles["contentImg-group"]}>
            <Swiper
              className={styles["yelloment-subSwiper"]}
              slidesPerView={3}
              initialSlide={2}
              spaceBetween={30}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              resistanceRatio={0}
              dir="rtl"
            >
              {yellomentSubSwiper()}
            </Swiper>
          </div>
        </div>
        <div className={styles["yelloment-img"]}>
          <Swiper
            className={styles["yelloment-swiper"]}
            initialSlide={1}
            slidesPerView={1}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            loop={true}
            resistanceRatio={0}
            dir="rtl"
          >
            {yellomentSwiper()}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MainYelloment;
