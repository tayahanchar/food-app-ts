import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Title className={styles.title}>Menu</Title>
        <div className={styles["input-wrapper"]}>
          <img
            className={styles["search-icon"]}
            src="./search.svg"
            alt="search"
          />
          <input
            name="search"
            type="string"
            className={styles.input}
            placeholder="search"
          />
        </div>
      </div>
      <section>
        <div className={styles.list}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Main;
