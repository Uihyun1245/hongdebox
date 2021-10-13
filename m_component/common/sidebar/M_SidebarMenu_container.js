import SidebarMenu from "./M_SidebarMenu";
import M_ToggleIcon from "../M_ToggleIcon";
import styles from "./scss/m_sideBarMenu_container.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggle, setCurrentMenu } from "../../../module/common/toggleIcon";
const MobileSideBarContainer = () => {
  const dispatch = useDispatch();
  const sideMenuList = [
    { id: 1, menuName: "Home", url: "/" },
    { id: 2, menuName: "Counter", url: "/counter" },
    { id: 3, menuName: "Todo List", url: "/todos" },
    { id: 4, menuName: "Instagram Cloning", url: "/insta" },
    { id: 5, menuName: "Pandac Coperation", url: "/pandac" },
  ];
  // const [currentMenu, setcurrentMenu] = useState(1);

  const sideBarActive = useSelector((state) => {
    return state.toggleIcon.active;
  });

  const handleToggle = (id) => {
    dispatch(toggle());
    if(typeof id == 'number'){
      dispatch(setCurrentMenu(id));

    }
  };

  return (
    <div
      className={`${styles["side-bar"]} ${
        sideBarActive ? styles["sideBar-active"] : ""
      }`}
    >
      <M_ToggleIcon
        id="sideMenu-toggle"
        sideBarActive={sideBarActive}
        handleToggle={handleToggle}
      ></M_ToggleIcon>
      {sideMenuList.map((sideMenu) => (
        <SidebarMenu
          menuName={sideMenu.menuName}
          url={sideMenu.url}
          styles={styles}
          handleToggle={()=>handleToggle(sideMenu.id)}
          key={`sideMenu${sideMenu.id}`}
        ></SidebarMenu>
      ))}
    </div>
  );
};

export default MobileSideBarContainer;
