import { Outlet } from "react-router-dom";
import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <img className={styles.logo} src="../plant.png" alt="logo" />
      <Outlet />
    </div>
  );
};

export default Auth;
