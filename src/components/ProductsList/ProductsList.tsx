import type { FC } from "react";
import Card, { type CardProps } from "../Card/Card";
import styles from "./ProductsList.module.css";

interface ProductsListProps {
  productsList: CardProps[];
}

const ProductsList: FC<ProductsListProps> = ({ productsList }) => {
  return (
    <div className={styles.list}>
      {productsList.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
