import MobilePandacHeader from "./M_Pandac_header";
import { useDispatch } from "react-redux";
import { menuClose } from "/module/common/toggleIcon";
import styles from "./scss/M_Pandac_layout.module.scss"; 
const MobilePandacLayout = ({ children }) => {
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(menuClose());
  };
  return (
    <div className={styles["pandac-wrapper"]} onClick={() => closeMenu()}>
      <MobilePandacHeader></MobilePandacHeader>
      { children }
    </div>
  );
}; 

export default MobilePandacLayout;
