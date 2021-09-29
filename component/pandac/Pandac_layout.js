import { useDispatch } from "react-redux";
import { menuClose } from "../../module/common/toggleIcon";
import PandacHeader from "./Pandac_header";
import PandacFooter from "./Pandac_footer";
import styles from "./scss/pandac_layout.module.scss"; 
const PandacLayout = ({ children }) => {
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(menuClose());
  };
  return (
    <div className={styles["pandac-wrapper"]} onClick={() => closeMenu()}>
      <PandacHeader></PandacHeader>
      { children }
      <PandacFooter></PandacFooter>
    </div>
  );
};

export default PandacLayout;
