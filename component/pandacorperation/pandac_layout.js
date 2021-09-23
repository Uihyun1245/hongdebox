import { useSelector, useDispatch } from "react-redux";
import { menuClose } from "../../module/common/toggleIcon";
import PandacHeader from "./pandac_header";
import MainIntro from "./main/main_intro";
import MainBanner from "./main/main_banner";
import MainService from "./main/main_service";
import styles from "./scss/pandac_layout.module.scss";
const PandacLayout = () => {
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(menuClose());
  };
  return (
    <div className={styles["pandac-wrapper"]} onClick={() => closeMenu()}>
      <PandacHeader></PandacHeader>
      <MainIntro></MainIntro>
      <MainBanner></MainBanner>
      <MainService></MainService>
    </div>
  );
};

export default PandacLayout;
