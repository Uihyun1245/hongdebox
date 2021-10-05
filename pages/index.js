import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../module/main/api_test";
import styles from "../styles/Home.module.scss";
export default function Home() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => {
    return state.apiTest.posts;
  });

  const handlePost = () => {
    dispatch(getPost());
  };


  return (
    <div className={styles["container"]}>
      <button onClick={handlePost}>포스트 가져오기</button>
      {posts.length!==0 && (
        <div>
          <p>{posts[0].id}</p>
          <p>{posts[0].title}</p>
          <p>{posts[0].author}</p>
        </div>
      )}
    </div>
  );
}
