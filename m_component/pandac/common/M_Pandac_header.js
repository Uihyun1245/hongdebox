import PandacToggleIcon from "./M_Pandac_toggleIcon";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toggle, setCurrentMenu } from "../../../module/common/toggleIcon";
import styles from "./scss/m_pandac_header.module.scss";

const MobilePandacHeader = () => {
  const dispatch = useDispatch();

  const menuList = [
    { menuName: "판다코퍼레이션", menuUrl: "/pandac/pandacorporation/" },
    { menuName: "큐잇", menuUrl: "/pandac/cueat/" },
    { menuName: "옐로먼트", menuUrl: "/pandac/yelloment/" },
    { menuName: "아그리파", menuUrl: "/pandac/agripa/" },
  ];
  const headerMenu = () => {
    const menuCompo = [];
    for (let i = 0, len = menuList.length; i < len; i++) {
      const menu = menuList[i];
      menuCompo.push(
        <li key={`menu${i}`}>
          <a href={menu.menuUrl}>{menu.menuName}</a>
        </li>
      );
    }
    return menuCompo;
  };


  const sideBarActive = useSelector((state) => {
    return state.toggleIcon;
  });
  const [active, setActive] = useState(false);

  const handleToggle = (e, id) => {
    dispatch(toggle(e.target.id));
    if (typeof id == "number") {
      dispatch(setCurrentMenu(id));
    }
    setActive(sideBarActive[e.target.id].active);
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["logo-container"]}>
          <a href="/pandac">
            <img
              src="/images/pandac/common/padac_logo.png"
              alt="판다코퍼레이션 메인로고"
            />
          </a>
        </div>
        <PandacToggleIcon sideBarActive={active } handleToggle={handleToggle}></PandacToggleIcon>
      </div>
        <div className={`${styles["menu-container"]} ${active ? styles['active']: ''}`}>
          <ul className={styles["menu-list"]}>{headerMenu()}</ul>
        </div>
    </header>
  );
};

export default MobilePandacHeader;
