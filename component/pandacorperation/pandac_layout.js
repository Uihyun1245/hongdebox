import { useSelector, useDispatch } from "react-redux";
import { menuClose } from "../../module/common/toggleIcon";
import PandacHeader from "./Pandac_header";
import MainIntro from "./main/Main_intro";
import MainBanner from "./main/Main_banner";
import MainService from "./main/Main_service";
import MainPandac from "./main/Main_pandac";
import MainCueat from "./main/Main_cueat";
import styles from "./scss/Pandac_layout.module.scss";
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
      <MainPandac></MainPandac>
      <MainCueat></MainCueat>
    </div>
  );
};

export default PandacLayout;
