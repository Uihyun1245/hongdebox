import PandacLayout from "/component/pandac/common/Pandac_layout";
import MobilePandacLayout from "../../m_component/pandac/common/M_Pandac_layout";
import MobilePandacMAin from "../../m_component/pandac/main/M_Pandac_main";
import PandacMain from "../../component/pandac/main/Pandc_main";
import styles from "/styles/scss/pandac/pandac_common.module.scss";

const Pandac = (props) => {

  Pandac.Layout = {
    mobile: MobilePandacLayout,
    browser: PandacLayout,
  };
  
  return (
    <div className={styles["wrapper"]}>
      {props.device === "mobile" ? (
        <MobilePandacMAin></MobilePandacMAin>
      ) : (
        <PandacMain></PandacMain>
      )}
    </div>
  );
};

export default Pandac;
