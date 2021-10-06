import PandacTopSection from "../../../component/pandac/common/Pandac_topSection";
import PandacServiceLink from "../../../component/pandac/common/pandac_serviceLink";
import PandacLayout from "../../../component/pandac/common/Pandac_layout";
import PandacLinkBtn from "../../../component/pandac/common/Pandac_linkBtn";
import AgripaIntroduce from "../../../component/pandac/agripa/Agripa_introduce";
import AgripaContent from "../../../component/pandac/agripa/Agripa_content";
import styles from "/styles/scss/pandac/pandac_common.module.scss";
const Agripa = () => {
  const contentList = [
    {
      title: "농산물가격 정보 및 거래량 시각화",
      textList: [
        "한국농수산식품유통공사와 서울시농수산식품공사의\n도소매 가격 데이터, 경락 가격 및 거래량 등의 시각화",
      ],
      imgPath: "/images/pandac/agripa/agripa",
      imgCnt: 2,
      imgType: "png",
    },
    {
      title: "수요 트렌트 확인, 경영체 데이터베이스",
      textList: [],
      imgPath: "/images/pandac/agripa/agripa_db",
      imgCnt: 2,
      imgType: "png",
    },
  ];

  const Content = () => {
    const tmpList = [];
    for (let i = 0, len = contentList.length; i < len; i++) {
      const content = contentList[i];
      tmpList.push(
        <AgripaContent
          content={content}
          key={`agripa-content${i}`}
        ></AgripaContent>
      );
    }
    return tmpList;
  };

  return (
    <div className={styles["container"]}>
      <PandacTopSection
        imgPath="/images/pandac/agripa/agripa_intro.jpg"
        title="AGRIPA"
      ></PandacTopSection>
      <PandacServiceLink
        serviceName="아그리파"
        linkPath="http://agripa.kr/"
      ></PandacServiceLink>
      <AgripaIntroduce></AgripaIntroduce>
      <Content></Content>
      <PandacLinkBtn
        link="http://agripa.kr/"
        text="아그리파 바로가기"
        serviceName="agripa"
      ></PandacLinkBtn>
    </div>
  );
};

Agripa.Layout = PandacLayout;

export default Agripa;
