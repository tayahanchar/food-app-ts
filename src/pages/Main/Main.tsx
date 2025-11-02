import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./Main.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";

const Main = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://purpleschool.ru/pizza-api-demo/products"
      );
      const result = await response.json();
      setProductsList(result);
    })();
  }, []);

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
      <ProductsList productsList={productsList} />
    </div>
  );
};

export default Main;
