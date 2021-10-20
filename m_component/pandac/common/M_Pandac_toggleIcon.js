import styles from "./scss/m_pandac_toggleIcon.module.scss";

const PandacToggleIcon = ({id,sideBarActive, handleToggle}) => {
  console.log(sideBarActive);
  return (
    <div
      className={`${styles["toggle-icon"]} ${sideBarActive ? styles["active"] : ""}`}
      onClick={handleToggle}
      id={id}
    >
      <span></span>
    </div>
  );
};

export default PandacToggleIcon;
