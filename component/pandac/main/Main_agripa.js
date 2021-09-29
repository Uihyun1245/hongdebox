import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./scss/main_agripa.module.scss";

import SwiperCore, { Autoplay, EffectFade } from "swiper";

SwiperCore.use([Autoplay, EffectFade]);
const MainAgripa = () => {
	const agripaSubSwiper = () => {
		const tmpSlide = [];
		for (let i = 0; i < 4; i++) {
		  tmpSlide.push(
			<SwiperSlide
			  className={styles["agripa-slide"]}
			  key={`agripa-subSwiper${i}`}
			>
			  <img
				src={`/images/pandac/main/agripa${i + 1}.png`}
				alt="agripa-subSwiper"
			  />
			</SwiperSlide>
		  );
		}
		return tmpSlide;
	  };
	
	  const agripaSwiper = () => {
		const tmpSlide = [];
		for (let i = 0; i < 4; i++) {
		  tmpSlide.push(
			<SwiperSlide
			  className={styles["agripa-mainSlide"]}
			  key={`agripa-subSwiper${i}`}
			>
			  <img
				src={`/images/pandac/main/agripa${i + 1}.png`}
				alt="agripa-swiper"
			  />
			</SwiperSlide>
		  );
		}
		return tmpSlide;
	  };
  return (
    <section className={styles["agripa-section"]}>
      <div className={styles["agripa-title"]}>
        <img src="/images/pandac/main/agripa.png" alt="옐로우먼트 로고" />
        <h2>아그리파</h2>
        <strong> 농산물 빅데이터 솔루션</strong>
      </div>
      <div className={styles["agripa-body"]}>
        <div className={styles["agripa-content"]}>
          <div className={styles["content-text"]}>
            <div className={styles["text-group"]}>
              <p>실시간 농산물 품목별 도소매 가격정보를 수집, 분석, 시각화</p>
              <p>농산물 관련 언론 기사 수집, 분석, 시각화</p>
              <p>포털, SNS에서 농산물 관련 정보 수집, 분석, 시각화</p>
              <p>
                농산물, 농식품 관련 회사의 데이터 베이스의 수집, 분석, 시각화
              </p>
            </div>
            <div className={styles["linkBtn"]}>
              <a href="http://agripa.kr/" target="_blank">
                아그리파 바로가기
              </a>
            </div>
          </div>
          <div className={styles["contentImg-group"]}>
		  <Swiper
              className={styles["agripa-subSwiper"]}
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
              {agripaSubSwiper()}
            </Swiper>
          </div>
        </div>
        <div className={styles["agripa-img"]}>
		<Swiper
            className={styles["agripa-swiper"]}
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
            {agripaSwiper()}
          </Swiper>
        </div>
      </div>
    </section>
  );
};


export default MainAgripa;