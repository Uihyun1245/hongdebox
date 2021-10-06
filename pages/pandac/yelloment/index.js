import PandacLayout from "/component/pandac/common/Pandac_layout";
import PandacLinkBtn from "/component/pandac/common/Pandac_linkBtn";
import PandacTopSection from "../../../component/pandac/common/Pandac_topSection";
import PandacServiceLink from "../../../component/pandac/common/pandac_serviceLink";
import YellomentIntroduce from "../../../component/pandac/yelloment/Yelloment_introduce";
import YellomentContent from "../../../component/pandac/yelloment/Yelloment_content";
import styles from "/styles/scss/pandac/pandac_common.module.scss";
const Yelloment = () => {
  const contentList = [
    {
      title: "주요 상품",
      textList: [
        '저항전분 쌀 "예쁨미"',
        '저온 건조 후 로스팅, 블렌딩한 티백차 "부티나게"',
        '냉동도시락 "Rice to meat you"',
        '친환경 농법 "유기농 백미밥"',
        '빈틈없는 영양잡곡 "예쁨 혼합15곡"',
        '프리미엄 유기농쌀 "골드퀸"',
      ],
      imgPath: "/images/pandac/yelloment/product",
      imgCnt: 6,
      imgType: "jpg",
    },
    {
      title: "라이브커머스",
      textList: [
        "총 45회의 라이브커머스를 진행",
        "누적 조회수 25,000회 이상 달성",
      ],
      imgPath: "/images/pandac/yelloment/yelloment_live",
      imgCnt: 6,
      imgType: "png",
    },
  ];

  const Content = () => {
    const tmpList = [];
    for (let i = 0, len = contentList.length; i < len; i++) {
      const content = contentList[i];
      tmpList.push(
        <YellomentContent
          content={content}
          key={`yelloment-content${i}`}
        ></YellomentContent>
      );
    }
    return tmpList;
  };

  return (
    <div className={styles["container"]}>
      <PandacTopSection
        imgPath="/images/pandac/yelloment/yelloment_intro.jpg"
        title="YELLOMENT"
      ></PandacTopSection>
      <PandacServiceLink
        serviceName="옐로먼트"
        linkPath="https://yelloment.co.kr/"
      ></PandacServiceLink>
      <YellomentIntroduce></YellomentIntroduce>
      <Content></Content>
      {/* <YellomentContent content={contentList[0]}></YellomentContent> */}
      <PandacLinkBtn
        link="https://yelloment.co.kr/"
        text="옐로먼트 바로가기"
        serviceName="yelloment"
      ></PandacLinkBtn>
    </div>
  );
};

Yelloment.Layout = PandacLayout;

export default Yelloment;
