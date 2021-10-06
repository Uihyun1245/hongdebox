import PandacLinkBtn from "/component/pandac/common/Pandac_linkBtn";

import styles from "./scss/yelloment_introduce.module.scss";
const YellomentIntroduce = () => {
  return (
    <div className={styles["yelloment-introduce"]}>
      <div className={styles["introduce-text"]}>
        <h3>
          옐로먼트는 쌀, 과일 등 농산물과 농산물을 원재료로 한<br />
          농식품을 판매하는 라이프스타일 농산물 쇼핑몰 입니다.
        </h3>
        <p>
          다양한 상품 기획, 구성을 통해 고객의 라이프 스타일에 맞는 농산물을
          판매합니다. <br />
          자사몰, 쿠팡, 네이버등 다양한 채널을 통해 브랜드 인지도를 확보중이며
          과일, 식품등 다양한 상품으로
          <br /> 라이브커머스를 진행하고 있습니다.
        </p>
        <PandacLinkBtn
          link="https://yelloment.co.kr/"
          text="옐로먼트 바로가기"
          serviceName="yelloment"
        ></PandacLinkBtn>
      </div>
      <div className={styles["introduce-img"]}>
        <img
          src="/images/pandac/yelloment/yelloment_introduce.png"
          alt="옐로먼트 소개사진"
        />
      </div>
    </div>
  );
};

export default YellomentIntroduce;
