import CounterContainer from "../../component/counter/Counter_container";
import styles from "../../styles/scss/counter/counter.module.scss";
export default function Counter() {
  return (
    <div className={styles["counter-wrapper"]}>
      <div className={styles["counter-title"]}>
        <h1>Counter</h1>
      </div>
      <CounterContainer></CounterContainer>
    </div>
  );
}
