import type { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
