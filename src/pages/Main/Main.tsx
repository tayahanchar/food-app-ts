import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./Main.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import { URL } from "../../constants";

const Main = () => {
  const [productsList, setProductsList] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch(`${URL}/products`);
      const result = await response.json();
      setProductsList(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
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
