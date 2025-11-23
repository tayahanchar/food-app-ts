import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./NavigationMenu.module.css";
import Button from "../Button/Button";

const NavigationMenu = () => {
  const navigate = useNavigate();

  const logOut = () => {
    console.log(";;");
    localStorage.setItem("token", "");
    navigate("/auth/login");
  };

  return (
    <div className={styles.app}>
      <div className={styles["nav-menu"]}>
        <p className={styles.name}>First name and last name</p>
        <p className={styles.email}>e-mail</p>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["link-active"] : styles.link
            }
            to="/"
          >
            <img className={styles.svg} src="./menu.svg" alt="menu" />
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["link-active"] : styles.link
            }
            to="/cart"
          >
            <img className={styles.svg} src="./cart.svg" alt="menu" />
            Cart
          </NavLink>
        </nav>
        <Button onClick={logOut} className={"button button-end"}>
          Log out
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default NavigationMenu;
