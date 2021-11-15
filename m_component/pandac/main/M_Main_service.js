import styles from "./scss/m_main_service.module.scss";

const MobileMainService = () => {
  const serviceList = [
    {
      title: "판다코퍼레이션",
      subtitle: "Panda Corporation",
      text: "판다코퍼레이션은 다음과 같은 A to F 기술로 농산물 유통시장을 혁신하는 농업기술 스타트업입니다.",
      imgPath: "/images/pandac/main/padac_logo.png",
      linkPath: "",
    },
    {
      title: "큐잇",
      subtitle: "Cueat",
      text: "농산물 정기구독 서비스",
      imgPath: "/images/pandac/main/cueat_logo.png",
      linkPath: "cueat.co.kr",
    },
    {
      title: "옐로먼트",
      subtitle: "Yellowment",
      text: "라이프스타일 신선식품 쇼핑몰",
      imgPath: "/images/pandac/main/yelloment_logo.png",
      linkPath: "yelloment.co.kr",
    },
    {
      title: "아그리파",
      subtitle: "Agripa",
      text: "농산물 빅데이터 솔루션",
      imgPath: "/images/pandac/main/agripa_logo.png",
      linkPath: "agripa.kr",
    },
  ];

  const serviceBox = () => {
    let tmp = [];
 
    for (let i = 0, len = serviceList.length; i < len; i++) {
      const service = serviceList[i];
      tmp.push(
        <div className={styles["service-box"]} key={`service-box${i}`}>
          <div className={styles["service-title"]}>
            <h2>{service.title}</h2>
            <h3>{service.subtitle}</h3>
          </div>
          <div className={styles["service-text"]}>
            <p>{service.text}</p>
          </div>
          <div className={styles["service-link"]}>
            <img src={service.imgPath} alt="service link image" />
            <a href={service.linkPath} target="_self">
              <img
                src="/images/pandac/common/right-arrow.png"
                alt="right arrow icon"
              />
            </a>
          </div>
        </div>
      );
    }
    return tmp;
  };
  return (
    <section className={styles["service-section"]}>{serviceBox()}</section>
  );
};

export default MobileMainService;
