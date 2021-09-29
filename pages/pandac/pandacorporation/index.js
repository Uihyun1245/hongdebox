import PandacLayout from "/component/pandac/pandac_layout";
import PandacTopSection from "/component/pandac/Pandac_topSection";
import PandacorporationIntroduce from "/component/pandac/pandacorporation/Pandacorporation_introduce";
import PandacorporationHistory from "/component/pandac/pandacorporation/Pandacorporation_history";
import styles from "/styles/scss/pandac/pandacorporation/pandacorporation_main.module.scss";
const Pandacorporation = () => {
  return (
    <div className={styles["pandac-wrapper"]}>
      <PandacTopSection
        imgPath="/images/pandac/pandacorporation/pandacorporation_intro.jpg"
        title="PANDA CORPORATION"
      ></PandacTopSection>
      <PandacorporationIntroduce></PandacorporationIntroduce>
      <PandacorporationHistory></PandacorporationHistory>
    </div>
  );
};

Pandacorporation.Layout = PandacLayout;
export default Pandacorporation;
