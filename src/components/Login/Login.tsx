import Button from "../Button/Button";
import { Input } from "../Input/Input";
import Title from "../Title/Title";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <form className={styles.form}>
      <Title className={styles.title}>Log in</Title>
      <div>
        <label htmlFor="email">Your email</label>
        <Input name="email" className={styles.input} />
      </div>
      <div>
        <label htmlFor="password">Your password</label>
        <Input name="password" className={styles.input} />
      </div>
      <Button className={styles.button}>Log in</Button>
    </form>
  );
};

export default Login;
