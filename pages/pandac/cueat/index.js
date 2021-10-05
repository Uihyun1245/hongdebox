import PandacLayout from "../../../component/pandac/common/Pandac_layout";
import PandacTopSection from "../../../component/pandac/common/Pandac_topSection";
import PandacLinkBtn from "../../../component/pandac/common/Pandac_linkBtn";
import CueatServiceLink from "../../../component/pandac/common/pandac_serviceLink";
import CueatContent from  "../../../component/pandac/cueat/cueat_content";
import styles from "/styles/scss/pandac/cueat/cueat.module.scss";

const Cueat = () => {
  const contentList = [
    {
      title:
        '큐잇은 "왜 사과는 한 개씩 팔지 않을까?"란 생각에서 시작된 농산물 큐레이션 정기구독 서비스입니다.',
      text: "슈퍼마켓, 대형마트, 온라인 대부분 대용량 위주의 판매로 불필요한 과소비를 유발하게됩니다.\n큐잇은 딱 필요한 양의 농산물을 고객의 라이프스타일에 맞추어 큐레이션을 해드리는 농산물 큐레이션 정기구독 서비스입니다.\n단순히 농산물을 소분해서 제품을 제공하는 것이 아닌 고객의 입맛, 체질, 기호에 따라 고객님 한분한분의 다른 구성으로 큐레이션을 합니다.",
	  imgTitle:"",
      imgPath: "",
      imgCnt: 0,
    },
    {
      title:
        "농산물 온라인 구매는 못미더우시나요? No!No! 절대 아닙니다. 큐잇은 여러차례의 선별 과정을 통해 고품질의 농산물을 제공합니다.",
      text: "자체품질 관리기준을 통과한 산지만을 엄선하여 계약을 하며 가락 시장등 다양한 루트를 통해 특 상품으로만 구성됩니다.\n자체 APC센터에서 농산물을 훼손하지 않고 당도를 측정할 수 있는 비파괴당도 선별기를 통해 2차 선별을 진행하므로\n농산물의 당도와 고객님들의 입맛을 한번에 사로잡기위해 철저한 선별과장을 지킵니다.",
	  imgTitle:"",
      imgPath: "",
      imgCnt: 0,
    },
    {
      title:
        "대용량 위주의 기존 장보기와 다르게 소비량 데이터에 따라 알맞은 양의 농산물을 소분하여 배송합니다.",
      text: "매번 대용량 위주의 장보기를 하면 남는 농산물을 경험해 보셨나요? 금액도 아깝고 음식물 쓰레기 처리도 매번 번거로웠을 겁니다.\n큐잇은 이러한 고민을 해결하기 위해 고객의 소비량에 맞게 상품을 큐레이션 및 소분 하여 제공합니다.",
	  imgTitle:"cueat-product",
      imgPath: "/images/pandac/cueat/product",
      imgCnt: 6,
    },
    {
      title: "매번 똑같은 과일은 질려요! 하지만 큐잇의 잇템은 늘 새롭습니다!",
      text: "매번 똑같은 과일이 아닌 전국 네트워크를 통한 지역특산 및 제철 농산물을 제공합니다. 또한 신규 종자, 수확정보에 따라\n다양한 신품종을 받아볼 수 있으며 우리 나라의 농산물 뿐만 아니라 수입상을 통해 전세계의 여러 희귀품종을 맛보실 수 있습니다.",
	  imgTitle:"cueat-item",
      imgPath: "/images/pandac/cueat/eat_item",
      imgCnt: 6,
    },
  ];

  const ContentSection = () => {
	  const tmpList = [];
	  for (let i = 0, len=contentList.length; i < len; i++) {
		  const content = contentList[i];
		  	tmpList.push(
				<CueatContent content={content} key={`cueat-content${i}`}></CueatContent>
			  )
	  }
	  return tmpList;
  };

  return (
    <div className={styles["container"]}>
      <PandacTopSection
        imgPath="/images/pandac/cueat/cueat_intro.jpg"
        title="CUEAT"
      ></PandacTopSection>
      <CueatServiceLink
        serviceName="큐잇"
        linkPath="https://cueat.kr/"
      ></CueatServiceLink>
	  <ContentSection></ContentSection>
    <PandacLinkBtn link="https://cueat.kr/" text="큐잇 바로가기" serviceName="cueat"></PandacLinkBtn>
    </div>
  );
};

Cueat.Layout = PandacLayout;

export default Cueat;
