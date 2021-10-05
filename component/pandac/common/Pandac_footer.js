import styles from "./scss/pandac_footer.module.scss"

const PandacFooter = () => {
  return (
    <footer>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["footer-container"]}>
          <div className={styles["footer-links"]}>
            <div className={styles["footer-company-details"]}>
              <img
                src="/images/pandac/main/padac_logo.png"
                alt="판다코퍼레이션 메인로고"
              />
            </div>
          </div>
          <div className={styles["footer-company-info"]}>
            <p>
              (주)판다코퍼레이션 | 대표이사 정규인 | 개인정보관리책임자 정규인
            </p>
            <p>서울특별시 강남구 봉은사로69길 37 부일빌딩 3층, 302호</p>
            <p>
              사업자 등록번호 :
              <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=4458701182">
                4458701182{" "}
              </a>
            </p>
            <p> 통신판매업 신고 : 2020-서울강남-00228호</p>
            <p>
              이메일 :{" "}
              <a href="mailto:panda@pandac.co.kr">panda@pandac.co.kr</a> |
              고객센터 :<a href="tel:070-4166-6077"> 070-4166-6077</a>
            </p>
          </div>
          <div className={styles["footer-copyright"]}>
            <p>COPYRIGHT © Panda Corporation ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default PandacFooter;