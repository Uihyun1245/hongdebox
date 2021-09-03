import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import ToggleIcon from "../common/toggleIcon";
import styles from "./scss/sideBarMenu_container.module.scss";

const SideBarContainer = () => {
  const sideMenuList = [
    { id: 1, menuName: "Counter", url: "/counter" },
    { id: 2, menuName: "Todo List", url: "/todos" },
  ];

  const [sideBarActive, setsideBarActive] = useState(false);

  const handleSideBar = () => {
    setsideBarActive(!sideBarActive);
  };
  return (
    <div
      className={`${styles["side-bar"]} ${
        sideBarActive ? styles["sideBar-active"] : ""
      }`}
    >
      <ToggleIcon id="sideMenu-toggle" handleSideBar={handleSideBar}></ToggleIcon>
      {sideMenuList.map((sideMenu) => (
        <SidebarMenu
          menuName={sideMenu.menuName}
          url={sideMenu.url}
          styles={styles}
		  handleSideBar={handleSideBar}
          key={`sideMenu${sideMenu.id}`}
        ></SidebarMenu>
      ))}
    </div>
  );
};

export default SideBarContainer;
