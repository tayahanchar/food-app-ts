import { useLoaderData } from "react-router-dom";
import type { CardProps } from "../Card/Card";

const Product = () => {
  const data = useLoaderData() as CardProps;

  return (
    <div>
      <p>Product {data.name} </p>
    </div>
  );
};

export default Product;
