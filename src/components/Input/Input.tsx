import type { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

export const Input: FC<InputProps> = ({
  type,
  name,
  className,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
