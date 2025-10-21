import { Link, Outlet } from "react-router-dom";
import styles from "./NavigationMenu.module.css";
import Button from "../Button/Button";

const NavigationMenu = () => {
  return (
    <div className={styles.app}>
      <div className={styles.navMenu}>
        <p className={styles.name}>First name and last name</p>
        <p className={styles.email}>e-mail</p>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">
            <img className={styles.svg} src="./menu.svg" alt="menu" />
            Main
          </Link>
          <Link className={styles.link} to="/Cart">
            <img className={styles.svg} src="./cart.svg" alt="menu" />
            Cart
          </Link>
        </nav>
        <Button className={"button button-end"}>Log out</Button>
      </div>
      <Outlet />
    </div>
  );
};

export default NavigationMenu;
