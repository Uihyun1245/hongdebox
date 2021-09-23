import styles from "./scss/Insta_presentation.module.scss";
const InstaPresentation = () => {
  const presentationList = [
    {
      id: 1,
      img: "/images/insta/presentation/presentation01.jpg",
      name: "cute_urang",
    },
    {
      id: 2,
      img: "/images/insta/presentation/presentation02.jpg",
      name: "dev_hong",
    },
  ];

  const ProfileList = () => {
    const tmpList = [];

    for (let i = 0, len = presentationList.length; i < len; i++) {
      const profile = presentationList[i];
      tmpList.push(
        <li key={`prsentation-profile${i}`}>
          <div className={styles['profile-img']}>
            <img src={profile.img} alt={`${profile.name} profile`} />
          </div>
          <span>{profile.name}</span>
        </li>
      );
    }
    return tmpList;
  };

  return (
    <div className={styles["presentation"]}>
      <ul className={styles["presentation-list"]}>
        <ProfileList></ProfileList>
      </ul>
      <div className={styles[""]}></div>
    </div>
  );
};

export default InstaPresentation;
