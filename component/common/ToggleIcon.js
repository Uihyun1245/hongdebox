import styles from "./scss/ToggleIcon.module.scss";

const ToggleIcon = ({id,sideBarActive, handleToggle}) => {
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

export default ToggleIcon;
