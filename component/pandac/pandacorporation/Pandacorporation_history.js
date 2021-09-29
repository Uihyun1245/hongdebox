import styles from "./scss/pandacorporation_history.module.scss";
const PandacorporationHistory = () => {
  const hitoryData = [
    {
      year: "2018",
      history: [{ month: "10", text: "법인 설립 자본금(1.0억)" }],
    },
    {
      year: "2019",
      history: [
        { month: "03", text: "명지대학교 산학협력 R&D 저항전분 쌀 개발" },
        { month: "09", text: "중국 동북아 Cross-border 판매 1위" },
        { month: "10", text: "ICT사업부 출범" },
      ],
    },
    {
      year: "2020",
      history: [
        { month: "02", text: "프리미엄 농산물 쇼핑몰 yelloment 런칭" },
        { month: "03", text: "유상증자 (1.0억)" },
        { month: "04", text: "농산물 빅데이터 서비스 Argripa beta 런칭" },
        { month: "07", text: "현대그린푸드 본가시 쌀 공급 계약체결" },
        { month: "08", text: "중소기업 벤처부 빅데이터 서비스 R&D 선정" },
        { month: "08", text: "기업부설연구소 설립" },
        { month: "08", text: "한국벤처투자 시드투자 유치" },
        { month: "11", text: "벤처인증 획득" },
        { month: "12", text: "농업 및 빅데이터 관련 특허 3건 등록 완료" },
      ],
    },
    {
      year: "2021",
      history: [{ month: "04", text: "농산물 정기구독 서비스 Cueat 런칭" }],
    },
  ];

  const HistoryList = () => {
    let tmpList = [];

    for (let i = 0, len = hitoryData.length; i < len; i++) {
      const historyList = hitoryData[i];
      const historyDetails = historyList.history;
      const detailsList = [];
      for (let n = 0, len = historyDetails.length; n < len; n++) {
        const history = historyDetails[n];
        detailsList.push(
          <div className={styles["history"]} key={`history${i}${n}`}>
            <span>{history.month}</span>
            <p>{history.text}</p>
          </div>
        );
      }
      tmpList.push(
        <div className={styles["history-box"]} key={`history-box${i}`}>
          <div className={styles["history-title"]}>
            <h2>{historyList.year}</h2>
          </div>
          <div className={styles["history-body"]}>{detailsList}</div>
        </div>
      );
    }
    return tmpList;
  };

  return <div className={styles["pandac-history"]}>{HistoryList()}</div>;
};

export default PandacorporationHistory;
