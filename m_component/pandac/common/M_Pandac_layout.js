import MobilePandacHeader from "./M_Pandac_header";
import MobilePandacFooter from "./M_Pandac_footer";
import { useDispatch } from "react-redux";
import { menuClose } from "/module/common/toggleIcon";
import styles from "./scss/m_pandac_layout.module.scss";
const MobilePandacLayout = ({ children }) => {
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(menuClose());
  };
  return (
    <div className={styles["pandac-wrapper"]} onClick={() => closeMenu()}>
      <MobilePandacHeader></MobilePandacHeader>
      {children}
      <MobilePandacFooter></MobilePandacFooter>
    </div>
  );
};

export default MobilePandacLayout;
