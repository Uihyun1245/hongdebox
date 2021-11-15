import MobileMainIntro from "./M_Main_intro";
import MobileMainBanner from "./M_Main_banner";
import MobileMainService from "./M_Main_service";
import MobileMainPandac from "./M_Main_pandac";
import MobileMainCueat from "./M_Main_cueat";
import MobileMainYelloment from "./M_Main_yelloment";
import MobileMainAgripa from "./M_Main_agripa";
import styles from "./scss/m_pandac_main.module.scss";

const MobilePandacMAin = () => {
  return (
    <div className={styles["mobile-main"]}>
      <MobileMainIntro></MobileMainIntro>
      <MobileMainBanner></MobileMainBanner>
      <MobileMainService></MobileMainService>
      <MobileMainPandac></MobileMainPandac>
      <MobileMainCueat></MobileMainCueat>
      <MobileMainYelloment></MobileMainYelloment>
      <MobileMainAgripa></MobileMainAgripa>
    </div>
  );
};

export default MobilePandacMAin;
