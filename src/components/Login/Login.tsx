import { useState } from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";
import Title from "../Title/Title";
import styles from "./Login.module.css";
import axios, { AxiosError } from "axios";
import { URL } from "../../constants";

type FormT = {
  email: string;
  password: string;
};

interface LoginResponse {
  token: string;
}

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form: FormT) => {
    try {
      const { data } = await axios.post<LoginResponse>(
        `${URL}/auth/login`,
        form
      );
      setError("");
      console.log(data);
    } catch (error) {
      const err = error as AxiosError;
      if (err.message) {
        setError(err.message);
      } else {
        setError("Error! Try again!");
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <Title className={styles.title}>Log in</Title>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="email">Your email</label>
        <Input
          name="email"
          className={styles.input}
          value={form.email}
          onChange={changeForm}
        />
      </div>
      <div>
        <label htmlFor="password">Your password</label>
        <Input
          name="password"
          className={styles.input}
          value={form.password}
          onChange={changeForm}
        />
      </div>
      <Button className={styles.button}>Log in</Button>
    </form>
  );
};

export default Login;
