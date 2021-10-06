import PandacLinkBtn from "../common/Pandac_linkBtn";
import styles from "./scss/agripa_introduce.module.scss";
const AgripaIntroduce = () => {
  return (
    <div className={styles["agripa-introduce"]}>
      <div className={styles["introduce-text"]}>
        <div className={styles["introduce-title"]}>
          <h3>
            아그리파는 농산물 생산업자, 유통업자를 위한
            <br />
            빅데이터 시각화 솔루션
          </h3>
          <p>
            다양한 상품 기획, 구성을 통해 고객의 라이프 스타일에 맞는 농산물을
            판매합니다. <br />
            자사몰, 쿠팡, 네이버등 다양한 채널을 통해 브랜드 인지도를 확보중이며
            과일, 식품등 다양한 상품으로
            <br />
            라이브커머스를 진행하고 있습니다.
          </p>
        </div>
        <PandacLinkBtn
          link="http://agripa.kr/"
          text="아그리파 바로가기"
          serviceName="agripa"
        ></PandacLinkBtn>
      </div>
      <div className={styles["introduce-img"]}>
        <img
          src="/images/pandac/agripa/agripa_introduce.png"
          alt="아그리파 소개사진"
        />
      </div>
    </div>
  );
};

export default AgripaIntroduce;
