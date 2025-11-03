import { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import styles from "./Main.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";
import { URL } from "../../constants";
import axios from "axios";
import type { CardProps } from "../../components/Card/Card";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Main = () => {
  const [productsList, setProductsList] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const { data } = await axios.get<CardProps[]>(`${URL}/products`);
      setProductsList(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
      setIsLoading(false);
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
      {!isLoading && <ProductsList productsList={productsList} />}
      {isLoading && <LoadingSpinner />}
      {isError && <div>Something went wrong</div>}
    </div>
  );
};

export default Main;
