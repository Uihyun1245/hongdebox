import styles from './scss/Insta_header.module.scss';
const InstaHeader = () => { 
  return (
    <div className={styles["header-wrapper"]}> 
      <div className={styles["header-container"]}>
        <div className={styles["logo"]}>
          <img src="/images/insta/header/insta_logo.png" alt="instagram logo" />
        </div>
        <div className={styles["nav-search"]}>
          <input type="text" />
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
