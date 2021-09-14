import { useSelector, useDispatch } from "react-redux";
import styles from "./scss/Insta_header.module.scss";
import { searchReady } from "../../module/insta/header/search";
const InstaHeader = ({handleSearchActive}) => {
  const searchActive = useSelector((state) => state.headerSearch.active);
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header-container"]}>
        <div className={styles["logo"]}>
          <img src="/images/insta/header/insta_logo.png" alt="instagram logo" />
        </div>
        <div className={styles["nav-search"]}>
          <div
            className={`${styles["search-idle"]} ${
              searchActive ? styles["search-active"] : ""
            }`}
            onClick={(e) => handleSearchActive(true,e)}
          >
            <img
              src="/images/insta/header/magnifying-glass.png"
              alt="search icon"
            />
            <span>검색</span>
          </div>
          <div
            className={`${styles["search-focus"]} ${
              searchActive ? styles["focus-active"] : ""
            }`}
          >
            <input type="text" />
            <div
              className={styles["search-cancel"]}
              onClick={(e) => handleSearchActive(false,e)}
            >
              <img src="./images/insta/header/cancel.png" alt="cancel icon" />
            </div>
          </div>
          <div
            className={`${styles["search-history"]} ${
              searchActive ? styles["search-history-active"] : ""
            }`}
          ></div>
        </div>
        <div className={styles["menu-list"]}>
          <ul>
            <li>
              <a href="">
                <img src="/images/insta/header/home.png" alt="home logo" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/insta/header/send.png" alt="send logo" />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="/images/insta/header/compass.png"
                  alt="compass logo"
                />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/insta/header/heart.png" alt="heart logo" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/insta/header/user.png" alt="user logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstaHeader;
