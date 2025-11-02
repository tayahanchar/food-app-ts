import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import type { FC } from "react";

export interface CardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  ingredients: string[];
}

const Card: FC<CardProps> = ({
  id,
  name,
  price,
  rating,
  image,
  ingredients,
}) => {
  return (
    <Link to={`product/${id}`}>
      <div className={styles.card}>
        <p className={styles.price}>{price} $</p>
        <img className={styles.img} src={image} alt="dish picture" />
        <div className={styles.rate}>
          <p>{rating}</p>
          <img className={styles.star} src="./star.png" alt="star" />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{name}</p>
          <p>{ingredients.join(", ")}</p>
        </div>
        <Button className="button button-right">
          Add
          <img className={styles.bag} src="./bag.svg" alt="bag" />
        </Button>
      </div>
    </Link>
  );
};

export default Card;
