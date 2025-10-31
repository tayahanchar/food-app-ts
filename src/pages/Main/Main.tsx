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
          <Card id="2" />
          <Card id="1" />
          <Card id="13" />
          <Card id="1e" />
          <Card id="12" />
          <Card id="12w" />
        </div>
      </section>
    </div>
  );
};

export default Main;
