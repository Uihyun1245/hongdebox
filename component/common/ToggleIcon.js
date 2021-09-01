import { useState } from "react";
import styles from "./scss/ToggleIcon.module.scss";

const ToggleIcon = ({id, handleSideBar}) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
	handleSideBar();
  };
  return (
    <div
      className={`${styles["toggle-icon"]} ${!toggle ? styles["active"] : ""}`}
	  onClick={handleToggle}
      id={id}
    >
      <span></span>
    </div>
  );
};

export default ToggleIcon;
