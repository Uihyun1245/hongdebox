import PandacLayout from "/component/pandac/common/Pandac_layout";
import MobilePandacMAin from "../../m_component/pandac/main/Pandac_main";
import PandacMain from "../../component/pandac/main/Pandc_main";
import styles from "/styles/scss/pandac/pandac_common.module.scss";

const Pandac = (props) => {
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



// Pandac.Layout = PandacLayout;

export default Pandac;
