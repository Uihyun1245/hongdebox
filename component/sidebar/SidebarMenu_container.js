import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import ToggleIcon from "../common/ToggleIcon";
import styles from "./scss/sideBarMenu_container.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../module/common/toggleIcon";
const SideBarContainer = () => {
  const dispatch = useDispatch();
  const sideMenuList = [
    { id: 1, menuName: "Home", url: "/" },
    { id: 2, menuName: "Counter", url: "/counter" },
    { id: 3, menuName: "Todo List", url: "/todos" },
  ];

  const sideBarActive = useSelector((state) => {
    return state.toggleIcon.active;
  });

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div
      className={`${styles["side-bar"]} ${
        sideBarActive ? styles["sideBar-active"] : ""
      }`}
    >
      <ToggleIcon
        id="sideMenu-toggle"
        sideBarActive={sideBarActive}
        handleToggle={handleToggle}
      ></ToggleIcon>
      {sideMenuList.map((sideMenu) => (
        <SidebarMenu
          menuName={sideMenu.menuName}
          url={sideMenu.url}
          styles={styles}
          handleToggle={handleToggle}
          key={`sideMenu${sideMenu.id}`}
        ></SidebarMenu>
      ))}
    </div>
  );
};

export default SideBarContainer;
