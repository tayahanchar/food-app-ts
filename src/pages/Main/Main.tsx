import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./Main.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import { URL } from "../../constants";
import axios from "axios";
import type { CardProps } from "../../components/Card/Card";

const Main = () => {
  const [productsList, setProductsList] = useState<CardProps[]>([]);

  async function fetchProducts() {
    try {
      const { data } = await axios.get<CardProps[]>(`${URL}/products`);
      setProductsList(data);
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
