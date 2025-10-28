import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <p className={styles.price}>20$</p>
      <img className={styles.img} src="./pizza.webp" alt="dish picture" />
      <div className={styles.rate}>
        <p>4.5</p>
        <img className={styles.star} src="./star.png" alt="star" />
      </div>
      <div className={styles.description}>
        <p className={styles.title}>Title</p>
        <p>Description</p>
      </div>
      <Button className="button button-right">
        Add
        <img className={styles.bag} src="./bag.svg" alt="bag" />
      </Button>
    </div>
  );
};

export default Card;
