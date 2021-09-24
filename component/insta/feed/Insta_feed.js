import styles from "./scss/Insta_feed.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const InstaFeed = () => {
  const feedDataList = [
    {
      index: 1,
      id: "cute_urang",
      profileImg: "/images/insta/presentation/presentation01.jpg",
      location: "삼척",
      imgList: [
        { imgId: 1, path: "/images/insta/feed/feedImg/feed_img001.jpg" },
        { imgId: 2, path: "/images/insta/feed/feedImg/feed_img002.jpg" },
        { imgId: 3, path: "/images/insta/feed/feedImg/feed_img003.jpg" },
      ],
      likeList: [],
      text: "",
    },
  ];
  const feedSlideList = (feedIdx, imgList) => {
    const tmpSlide = [];

    for (let n = 0, len = imgList.length; n < len; n++) {
      const img = imgList[n];

      tmpSlide.push(
        <SwiperSlide key={`feed-img${feedIdx}${n}`}>
          <img src={img.path} alt={`feed${feedIdx}${img.id}`} />
        </SwiperSlide>
      );
    }
    return tmpSlide;
  };

  const feedList = () => {
    const tmpList = [];

    for (let i = 0, len = feedDataList.length; i < len; i++) {
      const feed = feedDataList[i];
      const feedSlide = feedSlideList(feed.index, feed.imgList);
      tmpList.push(
        <article className={styles["feed-container"]} key={`feed${i}`}>
          <div className={styles["feed-header"]}>
            <div className={styles["feed-user"]}>
              <div className={styles["user-img"]}>
                <img src={feed.profileImg} alt={`feed-profileImg${i}`} />
              </div>
              <div className={styles["user-info"]}>
                <span className={styles["user-id"]}>{feed.id}</span>
                <span className={styles["user-location"]}>{feed.location}</span>
              </div>
            </div>
            <div className={styles["feed-option"]}>
              <img src="/images/insta/common/more.png" alt="more icon" />
            </div>
          </div>
          <div className={styles["feed-body"]}>
            <Swiper
              className={styles["feedSwiper-container"]}
              slidesPerView={1}
              navigation={true}
              // spaceBetween={50}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {feedSlide}
            </Swiper>
            <div className={styles[""]}></div>
            <div className={styles[""]}></div>
          </div>
          <div className={styles["feed-footer"]}></div>
        </article>
      );
    }
    return tmpList;
  };

  return <div className={styles["instagram-feed"]}>{feedList()}</div>;
};

export default InstaFeed;
